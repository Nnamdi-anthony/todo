import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Note from "../app/components/Note";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";
import { TextInput } from "react-native-gesture-handler";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: ""
    };
  }

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>- NOTE -</Text>
        </View>
        <ScrollView style={styles.container} />
        {notes}
        <View style={styles.footer}>
          <TextInput
            style={styles.TextInput}
            onChangeText={noteText => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder=">>note"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableOpacity
          onPress={this.addNote.bind(this)}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()
        "note": this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: '' });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    backgroundColor: "#E91E63",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#add"
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    zIndex: 10
  },
  textInput: {
    color: "#fff",
    padding: 20,
    backgroundColor: "#252525",
    borderTopWidth: 2,
    borderTopColor: "#ededed"
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24
  },
  addButton: {
    position: "absolute",
    zIndex: 11,
    right: 20,
    bottom: 50,
    backgroundColor: "#E91E63",
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  }

  // developmentModeText: {
  //   marginBottom: 20,
  //   color: "rgba(0,0,0,0.4)",
  //   fontSize: 14,
  //   lineHeight: 19,
  //   textAlign: "center"
  // },
  // contentContainer: {
  //   paddingTop: 30
  // },
  // welcomeContainer: {
  //   alignItems: "center",
  //   marginTop: 10,
  //   marginBottom: 20
  // },
  // welcomeImage: {
  //   width: 100,
  //   height: 80,
  //   resizeMode: "contain",
  //   marginTop: 3,
  //   marginLeft: -10
  // },
  // getStartedContainer: {
  //   alignItems: "center",
  //   marginHorizontal: 50
  // },
  // homeScreenFilename: {
  //   marginVertical: 7
  // },
  // codeHighlightText: {
  //   color: "rgba(96,100,109, 0.8)"
  // },
  // codeHighlightContainer: {
  //   backgroundColor: "rgba(0,0,0,0.05)",
  //   borderRadius: 3,
  //   paddingHorizontal: 4
  // },
  // getStartedText: {
  //   fontSize: 17,
  //   color: "rgba(96,100,109, 1)",
  //   lineHeight: 24,
  //   textAlign: "center"
  // },
  // tabBarInfoContainer: {
  //   position: "absolute",
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: "black",
  //       shadowOffset: { height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3
  //     },
  //     android: {
  //       elevation: 20
  //     }
  //   }),
  //   alignItems: "center",
  //   backgroundColor: "#fbfbfb",
  //   paddingVertical: 20
  // },
  // tabBarInfoText: {
  //   fontSize: 17,
  //   color: "rgba(96,100,109, 1)",
  //   textAlign: "center"
  // },
  // navigationFilename: {
  //   marginTop: 5
  // },
  // helpContainer: {
  //   marginTop: 15,
  //   alignItems: "center"
  // },
  // helpLink: {
  //   paddingVertical: 15
  // },
  // helpLinkText: {
  //   fontSize: 14,
  //   color: "#2e78b7"
  // }
});
