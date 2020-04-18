<script>
var i = 0;
function mudarCor(valor) {
  var body = document.getElementsByTagName("body")[0];
  var cor = ["#fc5403", "#ff2d4d", "#f8eb4e"]
  i += valor;
  if(i>=cor.length){
    i = 0;
  }
  if(i < 0){
    i = cor.length-1;
  }
  body.style.backgroundColor = cor[i];
}
</script>