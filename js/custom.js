window.onload = function() {
  welcomeMessage();
};

function welcomeMessage(){
    swal({
      title: "तपाईलाई यस खेलामा स्वागत छ । ",
      text: "यो सानो खेलबाट तपाईको जीवनामा ठुलो परिवर्तन आउन सक्छ !",
      timer: 3000
    });
    // sweetAlert("तपाईलाई यस खेलामा स्वागत छ । ", "यो सानो खेलबाट तपाईको जीवनामा ठुलो परिवर्तन आउन सक्छ !")
}

function askQuestion() {

    sweetAlert({
            title: "के तपाईको जीवनामा समस्या छ ?",
            text: "निर्धक्क भएर भन्नुहोस् ।",
            showCancelButton: true,
            confirmButtonColor: "#f44336",
            confirmButtonText: " कुनै समस्या छैन ",
            cancelButtonText: " समस्यौँ समस्या छ ",
            closeOnConfirm: false,
            closeOnCancel: false },
        function(isConfirm){
            if (isConfirm) {
                showFirstAnswer();
            } else {
                askAnotherQuestion();
            }
        });
}

function askAnotherQuestion(){
    sweetAlert({
            title: "के तपाईसँग यो समस्याको समाधान छ ?",
            text: "नढाटि भन्नुहोस् ।",
            showCancelButton: true,
            confirmButtonColor: "#f44336",
            confirmButtonText: " समस्याको समाधान छैन ",
            cancelButtonText: " समस्याको समाधान छ ",
            closeOnConfirm: false,
            closeOnCancel: false },
        function(isConfirm){
            if (isConfirm) {
                showSecondAnswer();
            } else {
                showThirdAnswer();
            }
        });
}

function showFirstAnswer(){
    sweetAlert("तपाईसँग कुनै समस्या नै रहेनछ", "त्यसैले चिन्ता लिन छोडिदिनुस", "success")
}

function showThirdAnswer(){
    sweetAlert("तपाईको समस्याको समाधान तपाईसँग नै रहेछ", "समस्या छिट्टै सुल्झ्याउनुहोस्, शुभकामाना !", "success")
}

function showSecondAnswer(){
    sweetAlert("तपाईको समस्याको समाधान नै रहेनछ", "समाधान नभएको समस्याको किन चिन्ता लिनुहुन्छ, चिन्ता लिन छोडिदिनुस !", "error")
}

