import { LayoutAnimation } from "react-native";

export const addNoteFunction = (
  note,
  notes,
  setNotes,
  editingId,
  setEditingId,
  setNote
) => {
  if (note.trim() === "") return;

  if (editingId) {
    setNotes(
      notes.map((item) =>
        item.id === editingId ? { ...item, text: note } : item
      )
    );
    setEditingId(null);
  } else {
    const newNote = {
      id: Date.now().toString(),
      text: note,
      date: new Date(),
      completed: false,
      isSelected: false,
    };
    setNotes([...notes, newNote]);
  }

  setNote("");
};

export const deleteNoteFunction = (id, notes, setNotes) => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  setNotes(notes.filter((item) => item.id !== id));
};

export const toggleCompleteFunction = (id, notes, setNotes) => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  setNotes(
    notes.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    )
  );
};

export const toggleSelectFunction = (id, notes, setNotes) => {
  setNotes(
    notes.map((item) =>
      item.id === id ? { ...item, isSelected: !item.isSelected } : item
    )
  );
};

export const moveToSelectedFunction = (
  notes,
  selectedNotes,
  setSelectedNotes,
  setNotes
) => {
  const selected = notes.filter((n) => n.isSelected);
  if (selected.length === 0) return;

  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  setSelectedNotes([...selectedNotes, ...selected]);
  setNotes(notes.filter((n) => !n.isSelected));
};
