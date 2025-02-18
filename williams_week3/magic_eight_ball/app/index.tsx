import { Text, View , StyleSheet, SafeAreaView, Pressable, ImageBackground, Modal, TextInput} from "react-native";
import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';



export default function Index() {
  // Create state management variables
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [ballResponse, setBallResponse] = useState("");

  // Magic 8 Ball responses
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

// generate response and start modal screen
function onEightBallShake() {
  const randomIndex = Math.floor(Math.random() * responses.length )
  const randomResponse = responses[randomIndex];
  setBallResponse(randomResponse);

  // start modal screen
  setModalIsVisible(true);
}

// close modal screen
function endEightBallHandler() {
  setModalIsVisible(false);
  setUserQuestion("");
}


  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.root}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Magic 8 Ball</Text>
        </View>

        <Text style={styles.inputLabel}>What do you want to know?</Text>
          <TextInput style={styles.textInput}
          placeholder="Enter your question here"
          placeholderTextColor="rgb(0,0,0)"
          multiline={true}
          // set to user's question
          onChangeText={setUserQuestion}
          value={userQuestion}
          />
        
        <View style={styles.askButtonContainer}>
          <Pressable style={styles.askButton } onPress={onEightBallShake}>
            <Text style={styles.askButtonText}>Ask the 8-Ball!</Text>
          </Pressable>
        </View>

      <Modal visible={modalIsVisible} animationType="slide">
        <SafeAreaView style={styles.modalRoot}>

        <View style={styles.ballContainer}>
          <ImageBackground source={require("../assets/images/8-Ball.png")} style={styles.ballImage}>
           {/* Image used from https://profoundjs.com/ide/bernice/magic-8-ball-app/ */}
           <Text style={styles.ballAnswer} numberOfLines={2} adjustsFontSizeToFit>
            {ballResponse}
           </Text>
          </ImageBackground>
        </View>

          <View style={styles.resultContainer}>
            <Text style={styles.resultQuestion}>{userQuestion}</Text>
            <Text style={styles.resultText}>Your answer is: {ballResponse}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <View>
              <Pressable style={styles.button} onPress={endEightBallHandler}>
                <Text style={styles.buttonText}>Ask another Question!</Text>
              </Pressable>
            </View>
          </View>

        </SafeAreaView>
      </Modal>

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(208, 250, 198)",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  askButtonContainer: {
    flex: 4,
    alignItems: "center",
    marginTop: 50,
  },
  askButton: {
    borderColor: "rgb(3, 73, 6)",
    borderWidth: 2,
    borderRadius: 15,
    borderStyle: "solid",
    padding: 15,
    backgroundColor: "rgb(67, 173, 25)",
  },
  askButtonText: {
    fontSize: 20,
    color: "rgb(254, 255, 254)",
  },
  ballContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
    marginBottom: 60,
  },
  ballImage: {
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  ballAnswer: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 5,
    maxWidth: 120,
    textAlign: "center",
  },
  modalRoot: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgb(208, 250, 198)",
  },
  buttonContainer: {
    flex: 1.3,
  },
  button: {
    borderColor: "rgb(3, 73, 6)",
    borderWidth: 2,
    borderRadius: 15,
    borderStyle: "solid",
    padding: 12,
    backgroundColor: "rgb(67, 173, 25)",
  },
  buttonText: {
    fontSize: 20,
    color: "rgb(254, 255, 254)",
  },
  resultContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50  
  },
  resultText: {
    fontSize: 15,
    marginTop: 8,
    fontWeight: "bold",
  },
  resultQuestion: {
    fontSize: 15,
    marginTop: 8,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  inputLabel: {
    fontSize: 25,
    marginBottom: 50,
  },
  textInput: {
    backgroundColor: "rgb(216, 248, 212)",
    padding: 20,
    color: "rgb(0,0,0)",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "rgb(3, 73, 6)",
    width: 300,
  },

});