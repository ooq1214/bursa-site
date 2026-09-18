const people = {

    sigma: {
        name: "Сигма (Иван Сахно)",
        year: "С 2025 ГОДА",
        image: "images/Sigma 1.png",
        description: "Его история — отдельная глава в истории нашей бурсы.",
        history: `Иван Сахно оказался одним из тех людей, которые быстро стали частью атмосферы бурсы.

За время проживания появилось множество историй, приколов и моментов, которые сложно забыть.

Это одна из тех историй, которая ещё обязательно будет дополняться новыми событиями.`
    },

    maks: {
        name: "Максим",
        year: "С 2025 ГОДА",
        image: "images/Maks 1.jpg",
        description: "Тоже одна из интересных людей бурсы.",
        history: `Максим — человек, с которым связано достаточно много моментов из жизни бурсы.

Обычные дни очень быстро превращались в какие-то отдельные истории.

К примеру пересеение в С блок из за довольно интересной истории`
    },

    danil: {
        name: "Данил (хакер)",
        year: "С 2025 ГОДА",
        image: "images/Daynil 1.png",
        description: "Хакерская история и не только.",
        history: `Данил запомнился своей любовью к компьютеру и игре Dota 2.

За ним закрепилась репутация местного хакера.

Его история состоит не только из компьютерных приколов, но и из обычной жизни в бурсе.`
    },

    andrey: {
        name: "Андрей Хура (токсис)",
        year: "С 2025 ГОДА",
        image: "images/Andrey 1.png",
        description: "Человек, про которого тоже есть что рассказать.",
        history: `Андрей — один из тех людей, которые постоянно оказываются внутри каких-то событий.

У него накопилось немало историй, связанных с компанией, общагой и обычными буднями.

З`
    },

    artem: {
        name: "Артём",
        year: "С 2025 ГОДА",
        image: "images/Artem 1.png",
        description: "Обычная жизнь в бурсе, но с кучей интересных моментов.",
        history: `История Артёма состоит из повседневной жизни в бурсе и множества небольших, но запоминающихся событий.

Именно из таких моментов и складывается атмосфера всей компании.

Относительный создатель всей истории бурсы`
    },

    kirill: {
        name: "Кирилл",
        year: "С 2025 ГОДА",
        image: "images/Kirill 1.png",
        description: "Было не так много историй, но некоторые из них были смешными.",
        history: `Кирилл не всегда находился в самом центре событий, но некоторые моменты с ним точно запомнились.

Пяточки`
    },

    vanya: {
        name: "Ваня",
        year: "С 2025 ГОДА",
        image: "images/Vanya 1.png",
        description: "Всегда находился в центре событий и движухи.",
        history: `Ваня часто оказывался в самом центре различных событий.

Но был не привязан к последствиям и тд.

`
    },

    riziy: {
        name: "Ваня (РЫЖИЙ)",
        year: "С 2025 ГОДА",
        image: "images/Riziy 1.png",
        description: "Запомнился своими завозами, bardzo lubię Dodge.",
        history: `Рыжий запомнился своими завозами и постоянным движением вокруг компании.

Отдельной частью его истории стала легендарная фраза "bardzo lubię Dodge".

.`
    },

    bohdan: {
        name: "Богдан",
        year: "С 2025 ГОДА",
        image: "images/Bohdan 1.png",
        description: "Имеет заразный смех.",
        history: `Богдан — человек, которого сложно не заметить из-за его смеха.

Многие моменты становились ещё смешнее именно из-за его реакции.

.`
    },

    misha: {
        name: "Михусик",
        year: "С 2025 ГОДА",
        image: "images/Misha 1.jpg",
        description: "Его история ещё обязательно будет дополнена.",
        history: `История Михусика пока находится в процессе написания.

`
    },

    igor: {
        name: "Игорь",
        year: "С 2025 ГОДА",
        image: "images/Igor 1.png",
        description: "Ещё один человек, без которого история бурсы была бы другой.",
        history: `Игорь стал частью общей истории бурсы и компании.

За время проживания накопилось достаточно моментов, так же темки.

`
    },

    nazar: {
        name: "Назар",
        year: "С 2025 ГОДА",
        image: "images/Nazar 1.png",
        description: "Довольно интересная MOGG история.",
        history: `История Назара — отдельная часть.

С ним связано немало моментов и внутренних приколов компании.
`
    }

};


// ============================
// MODAL
// ============================

const modal = document.getElementById("personModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalYear = document.getElementById("modalYear");
const modalDescription = document.getElementById("modalDescription");
const modalHistory = document.getElementById("modalHistory");

const cards = document.querySelectorAll(".person-card");


function openPerson(personId) {

    const person = people[personId];

    if (!person) {
        return;
    }

    modalImage.src = person.image;
    modalImage.alt = person.name;

    modalName.textContent = person.name;
    modalYear.textContent = person.year;
    modalDescription.textContent = person.description;
    modalHistory.textContent = person.history;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    modalClose.focus();
}


function closeModal() {

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");
}


// ============================
// CLICK ON CARD
// ============================

cards.forEach(card => {

    card.addEventListener("click", () => {

        const personId = card.dataset.person;

        openPerson(personId);

    });


    // Enter / Space для открытия
    card.addEventListener("keydown", (event) => {

        if (event.key === "Enter" || event.key === " ") {

            event.preventDefault();

            const personId = card.dataset.person;

            openPerson(personId);
        }

    });

});


// ============================
// CLOSE BUTTON
// ============================

modalClose.addEventListener("click", closeModal);


// Закрытие по клику на тёмный фон
modalOverlay.addEventListener("click", closeModal);


// Закрытие клавишей ESC
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && modal.classList.contains("active")) {

        closeModal();

    }

});