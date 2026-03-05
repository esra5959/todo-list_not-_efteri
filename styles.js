import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },

  checkbox: {
  marginRight: 10,
  justifyContent: "center",
  alignItems: "center",
  width: 24,
},
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 15,
  },
  topButtons: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  listButton: {
    flex: 1,
    backgroundColor: "#1cc88a",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  selectedButton: {
    flex: 1,
    backgroundColor: "#f6c23e",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  moveButton: {
    backgroundColor: "#858796",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingTop: 10,
    minHeight: 50,
    maxHeight: 120,
    fontSize: 16,
    textAlignVertical: "top",
  },
  addButton: {
    backgroundColor: "#36b9cc",
    width: 50,
    height: 50,
    borderRadius: 12,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    elevation: 6,
  },
  index: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4e73df",
    marginTop: 2,
  },
  noteText: {
    fontSize: 16,
    fontWeight: "500",
    flexWrap: "wrap",
  },
  date: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },
  iconRow: {
    flexDirection: "row",
    gap: 10,
  },
  selectedTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#fff",
  },
});
