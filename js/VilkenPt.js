function calculate() {
    // Hämta alla valda svaralternativ
    var q1 = document.querySelector('input[name="q1"]:checked').value;
    var q2 = document.querySelector('input[name="q2"]:checked').value;
    var q3 = document.querySelector('input[name="q3"]:checked').value;

    // Skapa en variabel för resultatet
    var result;

    // Använd en switch-sats för att bestämma resultatet baserat på användarens svar
    switch(q1 + q2 + q3) {

      case "styrketräning1-2 gångerbygga muskler":
        result = "Herman";
        break;
    case "styrketräning3-4 gångerbygga muskler":
            result = "Balazs";
            break;
    case "styrketräning4-5 gångerbygga muskler":
            result = "Adnan";
            break;

    case "styrketräning1-2 gångergå ner i vikt":
                result = "Herman";
                break;
    case "styrketräning3-4 gångergå ner i vikt":
                result = "Balazs";
                break;
    case "styrketräning4-5 gångergå ner i vikt":
                result = "Adnan";
                break;

    case "styrketräning1-2 gångerförbättra hälsan":
                result = "Herman";
                break;
    case "styrketräning3-4 gångerförbättra hälsan":
                result = "Adnan";
                break;
    case "styrketräning4-5 gångerförbättra hälsan":
                result = "Hannes";
                break;


    case "konditionsträning1-2 gångerbygga muskler":
                result = "Adnan";
                break;
    case "konditionsträning3-4 gångerbygga muskler":
                result = "Balazs";
                break;
    case "konditionsträning4-5 gångerbygga muskler":
                result = "Hannes";
                break;
    case "konditionsträning1-2 gångergå ner i vikt":
                result = "Herman";
                break;
    case "konditionsträning3-4 gångergå ner i vikt":
                result = "Adnan";
                break;
    case "konditionsträning4-5 gångergå ner i vikt":
                result = "Hannes";
                break;
    case "konditionsträning1-2 gångerförbättra hälsan":
                result = "Balazs";
                break;
    case "konditionsträning3-4 gångerförbättra hälsan":
                result = "Herman";
                break;
    case "konditionsträning4-5 gångerförbättra hälsan":
                result = "Hannes";
                break;




    case "Bodybuilding1-2 gångerbygga muskler":
                result = "Herman";
                break;
    case "Bodybuilding3-4 gångerbygga muskler":
                result = "Balazs";
                break;
    case "Bodybuilding4-5 gångerbygga muskler":
                result = "Adnan";
                break;
    case "Bodybuilding1-2 gångergå ner i vikt":
                result = "Balazs";
                break;
    case "Bodybuilding3-4 gångergå ner i vikt":
                result = "Hannes";
                break;
    case "Bodybuilding4-5 gångergå ner i vikt":
                result = "Adnan";
                break;
    case "Bodybuilding1-2 gångerförbättra hälsan":
                result = "Herman";
                break;
    case "Bodybuilding3-4 gångerförbättra hälsan":
                result = "Balazs";
                break;
    case "Bodybuilding4-5 gångerförbättra hälsan":
                result = "Adnan";
                break;
    }

    // Visa resultatet
    document.getElementById("result").innerHTML = result;
  }