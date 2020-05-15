import React from "react";
import * as firebase from "firebase";
import MaterialTable from "material-table";
import Loading from "../../components/Loading";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: null,
      columns: [
        {
          title: "Description",
          field: "description",
          editComponent: props => (
            <textarea
              rows={20}
              cols={40}
              value={props.value}
              onChange={e => props.onChange(e.target.value)}
            />
          )
        }
      ]
    };
  }

  componentDidMount() {
    const that = this;
    const aboutDocRef = firebase.firestore().collection("about");

    let about = [];
    aboutDocRef
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          snapshot.docs.map(doc => {
            about.push(doc.data());
          });
        }
        that.setState({ about });
      })
      .catch(error => {
        // Handle any errors
      });
  }

  render() {
    const { about, columns } = this.state;
    const firestore = firebase.firestore();

    const that = this;
    const aboutDocRef = firestore.collection("about");
    return (
      <div style={{ maxWidth: "100%" }}>
        {about ? (
          <MaterialTable
            columns={columns}
            data={about}
            title="About"
            editable={{
              onRowAdd:
                about.length < 1
                  ? newData =>
                      new Promise(resolve => {
                        const doc = aboutDocRef.doc();
                        newData.id = doc.id;
                        doc
                          .set(newData)
                          .then(() => {
                            that.setState(prevState => {
                              const about = [...prevState.about];
                              about.push(newData);
                              return { ...prevState, about };
                            });
                            resolve();
                          })
                          .catch(error => {
                            // Handle any errors
                          });
                      })
                  : null,
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  if (oldData) {
                    const doc = aboutDocRef.doc(oldData.id);
                    doc
                      .set(newData)
                      .then(snapshot => {
                        this.setState(prevState => {
                          const about = [...prevState.about];
                          about[about.indexOf(oldData)] = newData;
                          return { ...prevState, about };
                        });
                        resolve();
                      })
                      .catch(error => {
                        // Handle any errors
                      });
                  }
                }),
              onRowDelete: oldData =>
                new Promise(resolve => {
                  aboutDocRef
                    .doc(oldData.id)
                    .delete()
                    .then(() => {
                      this.setState(prevState => {
                        const about = [...prevState.about];
                        about.splice(about.indexOf(oldData), 1);
                        return { ...prevState, about };
                      });
                      resolve();
                    });
                })
            }}
          />
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
export default About;
