import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Container() {
  const [keys, setKeys] = useState([]);
  const [result, setResult] = useState("");
  let combination = "";
  function getResult() {
    for (let i = 0; i < keys.length; i++) {
      combination = combination + keys[i];
    }
    const executeStringNumber = eval(combination);
    setResult(" = " + executeStringNumber);
  }

  // delete resulst
  function deleteByNumber() {
    setKeys(keys.slice(0, -1));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>Display</Text>
      <Text style={styles.output}>
        {keys}
        {result}
      </Text>
      <View>
        <View style={styles.containerReset}>
          <TouchableOpacity onPress={() => setResult([]) + setKeys([])}>
            <Text style={styles.keysReset}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteByNumber()}>
            <Text style={styles.keysReset}>{"<"}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerNumber}>
          <TouchableOpacity onPress={() => setKeys([...keys, "1"])}>
            <Text style={styles.keysNumber}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, "2"])}>
            <Text style={styles.keysNumber}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, "-"])}>
            <Text style={styles.typeNumber}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, "+"])}>
            <Text style={styles.typeNumber}>+</Text>
          </TouchableOpacity>
          {/*  */}
          <View style={styles.containerNumber}>
            <TouchableOpacity onPress={() => setKeys([...keys, "3"])}>
              <Text style={styles.keysNumber}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setKeys([...keys, "4"])}>
              <Text style={styles.keysNumber}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setKeys([...keys, "/"])}>
              <Text style={styles.typeNumber}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setKeys([...keys, "*"])}>
              <Text style={styles.typeNumber}>*</Text>
            </TouchableOpacity>
          </View>
          {/*  */}
          <View style={styles.containerNumber}>
            <TouchableOpacity onPress={() => setKeys([...keys, "5"])}>
              <Text style={styles.keysNumber}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setKeys([...keys, "6"])}>
              <Text style={styles.keysNumber}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setKeys([...keys, "%"])}>
              <Text style={styles.typeNumber}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => getResult()}>
              <Text style={styles.typeNumber}>=</Text>
            </TouchableOpacity>
          </View>
          {/*  */}
          <View style={styles.containerNumber}>
            <TouchableOpacity onPress={() => setKeys([...keys, "7"])}>
              <Text style={styles.keysNumber}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setKeys([...keys, "8"])}>
              <Text style={styles.keysNumber}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setKeys([...keys, "9"])}>
              <Text style={styles.keysNumber}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setKeys([...keys, "0"])}>
              <Text style={styles.keysNumber}>0</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202d3b",
    paddingBottom: 70,
  },
  textHeading: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 25,
    marginLeft: 50,
    marginTop: 40,
    marginBottom: 40,
  },
  containerNumber: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  output: {
    display: "flex",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    color: "black",
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: 1,
    fontSize: 25,
    height: 70,
    width: "80%",
    marginBottom: 25,
    marginLeft: 39,
  },
  keysNumber: {
    display: "flex",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    color: "white",
    backgroundColor: "red",
    borderColor: "red",
    borderWidth: 1,
    fontSize: 25,
    width: 70,
    height: 70,
    margin: 5,
  },
  typeNumber: {
    display: "flex",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    color: "white",
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: 1,
    fontSize: 30,
    width: 70,
    height: 70,
    margin: 5,
  },
  keysReset: {
    display: "flex",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    color: "white",
    backgroundColor: "orange",
    borderColor: "orange",
    borderWidth: 1,
    fontSize: 25,
    width: 70,
    height: 70,
    marginLeft: 10,
    marginBottom: 5,
  },
  containerReset: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 30,
  },
});
