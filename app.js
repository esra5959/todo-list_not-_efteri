import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  UIManager,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

import Card from "./components/Card";
import {
  addNoteFunction,
  deleteNoteFunction,
  toggleCompleteFunction,
} from "./components/noteFunctions";

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [showList, setShowList] = useState(true);
  const [showSelected, setShowSelected] = useState(false);
  const [selectingForFavorites, setSelectingForFavorites] = useState(false);
  const [tempSelected, setTempSelected] = useState([]);

  const addNote = () => {
    addNoteFunction(note, notes, setNotes, editingId, setEditingId, setNote);
  };

  const deleteNote = (id) => deleteNoteFunction(id, notes, setNotes);
  const toggleComplete = (id) => toggleCompleteFunction(id, notes, setNotes);

  const editNote = (item) => {
    setNote(item.text);
    setEditingId(item.id);
  };

  const finalizeFavorites = () => {
    const newFavorites = notes.filter(n => tempSelected.includes(n.id));
    const updatedFavorites = [...selectedNotes];

    newFavorites.forEach(fav => {
      if (!updatedFavorites.some(n => n.id === fav.id)) {
        updatedFavorites.push(fav);
      }
    });

    setSelectedNotes(updatedFavorites);
    setSelectingForFavorites(false);
    setTempSelected([]);
  };

  return (
    <LinearGradient colors={["#4e73df", "#1cc88a"]} style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.container}>
          <Text style={styles.title}>📝 My Notes</Text>

          <View style={styles.topButtons}>
            <TouchableOpacity
              style={styles.listButton}
              onPress={() => {
                setShowList(!showList);
                if (showSelected) setShowSelected(false);
              }}
            >
              <Text style={styles.btnText}>
                {showList ? "Listeyi Gizle" : "Listeyi Göster"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.selectedButton}
              onPress={() => {
                setShowSelected(!showSelected);
                setShowList(showSelected);
              }}
            >
              <Text style={styles.btnText}>Favoriler</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.moveButton}
            onPress={() => {
              if (selectingForFavorites) {
                finalizeFavorites();
              } else {
                setSelectingForFavorites(true);
                setTempSelected([]);
              }
            }}
          >
            <Text style={styles.btnText}>
              {selectingForFavorites ? "Seçimi tamamla" : "Favorileri seç"}
            </Text>
          </TouchableOpacity>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Yeni not ekle..."
              placeholderTextColor="#999"
              value={note}
              onChangeText={setNote}
              multiline
            />
            <TouchableOpacity style={styles.addButton} onPress={addNote}>
              <Ionicons name={editingId ? "checkmark" : "add"} size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          {showList && (
            <FlatList
              data={notes}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <Card
                  item={item}
                  index={index}
                  toggleComplete={toggleComplete}
                  editNote={editNote}
                  deleteNote={deleteNote}
                  selectingForFavorites={selectingForFavorites}
                  tempSelected={tempSelected}
                  setTempSelected={setTempSelected}
                />
              )}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={{ paddingBottom: 100 }}
            />
          )}

          {showSelected && (
            <>
              <Text style={styles.selectedTitle}>⭐ Favori notlar</Text>
              <FlatList
                data={selectedNotes}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                  <Card
                    item={item}
                    index={index}
                    toggleComplete={toggleComplete}
                    editNote={editNote}
                    deleteNote={deleteNote}
                    selectingForFavorites={false}
                    tempSelected={[]}
                    setTempSelected={() => {}}
                  />
                )}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ paddingBottom: 100 }}
              />
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}
