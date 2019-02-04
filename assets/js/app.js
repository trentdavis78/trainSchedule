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

    function saveToFirebase(name, dest, start, freq) {
        var creds = {
            name,
            dest,
            start,
            freq
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
        var dest = $("#dest").val();
        var start = $("#start").val();
        var freq = $("#freq").val();
        saveToFirebase(name, dest, start, freq);
        $('#signinForm').trigger("reset");
    });

    db.ref().on("child_added", function (snap) {
        var sv = snap.val();

        var html = "<tr>";
        html += "<td>" + sv.name + "</td>";
        html += "<td>" + sv.dest + "</td>";
        html += "<td>" + sv.start + "</td>";
        html += "<td></td>";
        html += "<td>" + sv.freq + "</td>";
        html += "<td></td>";
        $("#tbody").append(html);
    });
});


