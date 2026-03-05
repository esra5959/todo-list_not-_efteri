import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles";

const Card = ({
  item,
  index,
  toggleComplete,
  editNote,
  deleteNote,
  selectingForFavorites,
  tempSelected,
  setTempSelected
}) => {
  const formattedDateTime =
    new Date(item.date).toLocaleDateString("tr-TR") +
    " " +
    new Date(item.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const isTempSelected = tempSelected.includes(item.id);

  const toggleTempSelect = () => {
    if (isTempSelected) {
      setTempSelected(tempSelected.filter(id => id !== item.id));
    } else {
      setTempSelected([...tempSelected, item.id]);
    }
  };

  return (
    <View style={[styles.card, item.isSelected && { backgroundColor: "#d1ecf1" }]}>
      {selectingForFavorites && (
        <TouchableOpacity onPress={toggleTempSelect} style={styles.checkbox}>
          <Text>{isTempSelected ? "☑" : "☐"}</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.index}>{index + 1}.</Text>

      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => !selectingForFavorites && toggleComplete(item.id)}
        onLongPress={() => {}}
      >
        <Text style={[styles.noteText, item.completed && { textDecorationLine: "line-through", color: "#aaa" }]}>
          {item.text}
        </Text>
        <Text style={styles.date}>{formattedDateTime}</Text>
      </TouchableOpacity>

      {!selectingForFavorites && (
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => editNote(item)}>
            <Ionicons name="create-outline" size={22} color="#f6c23e" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteNote(item.id)}>
            <Ionicons name="trash-outline" size={22} color="#e74a3b" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Card;
