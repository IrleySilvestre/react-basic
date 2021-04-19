var fixedString = ""
var badString = "Acesso ao Cadastro de mÃ³dulo que Ã© um agrupador dos componentes controlados."

try{
    fixedString = decodeURIComponent(escape(badString))
    console.log(fixedString)

}catch (e) {
    console.log(e)
    fixedString = badString
}
