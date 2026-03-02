const form = document.getElementById("noteForm");
const notesContainer = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
    notesContainer.innerHTML = "";

    notes.forEach((note, index) => {
        const div = document.createElement("div");
        div.classList.add("note");

        div.innerHTML = `
            <button class="deleteBtn" onclick="deleteNote(${index})">X</button>
            <h3>${note.title}</h3>
            <small>${note.subject}</small>
            <p>${note.description}</p>
            ${note.file ? `<a href="${note.file}" download>Descargar archivo</a>` : ""}
        `;

        notesContainer.appendChild(div);
    });
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const subject = document.getElementById("subject").value;
    const description = document.getElementById("description").value;
    const fileInput = document.getElementById("file");

    if (fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function() {
            const newNote = {
                title,
                subject,
                description,
                file: reader.result
            };

            notes.push(newNote);
            saveNotes();
            renderNotes();
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        const newNote = {
            title,
            subject,
            description,
            file: null
        };

        notes.push(newNote);
        saveNotes();
        renderNotes();
    }

    form.reset();
});

renderNotes();
