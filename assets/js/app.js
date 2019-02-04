$(document).ready(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBmtHwFeSSpncbrLPf4wSKzEd7kFytw2aI",
        authDomain: "sample-project-21daa.firebaseapp.com",
        databaseURL: "https://sample-project-21daa.firebaseio.com",
        projectId: "sample-project-21daa",
        storageBucket: "sample-project-21daa.appspot.com",
        messagingSenderId: "1058522665094"
    };
    firebase.initializeApp(config);

    var db = firebase.database();

    function saveToFirebase(name, role, startDate, monthlyRate) {
        var creds = {
            name,
            role,
            startDate,
            monthlyRate
        };

        db.ref().push().set(creds)

            .then(function (snap) {
                console.log("Success!");
            }, function (err) {
                console.log(err + " error");
            });
    }

    $("#submit").on("click", function (e) {
        e.preventDefault();
        var name = $("#name").val();
        var role = $("#role").val();
        var startDate = $("#startDate").val();
        var monthlyRate = $("#monthlyRate").val();
        saveToFirebase(name, role, startDate, monthlyRate);
        $('#signinForm').trigger("reset");
    });

    db.ref().on("child_added", function (snap) {
        var sv = snap.val();

        var html = "<tr>";
        html += "<td>" + sv.name + "</td>";
        html += "<td>" + sv.role + "</td>";
        html += "<td>" + sv.startDate + "</td>";
        html += "<td></td>";
        html += "<td>" + sv.monthlyRate + "</td>";
        html += "<td></td>";
        $("#tbody").append(html);
    });
});


