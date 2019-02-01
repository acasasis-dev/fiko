<!DOCTYPE html>
<html>
<head>

              
              <!-- <audio controls style="width:100%;">
                 -->
                 <audio id="myAudio">

                   <source src="files/to-eat.mp3" type="audio/mpeg">
                 </audio>
                <button onclick="playAudio()" type="button">play</button>


<script>
                   var x = document.getElementById("myAudio");

                   function playAudio(){
                    x.play();
                   }
                 </script>


</body>
</html>
