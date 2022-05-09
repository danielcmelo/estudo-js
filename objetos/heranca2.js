//Cadeia de prototipo(prototipo chain)
const avo = {
    attr1:'A'//herança Object.prototype
}

const pai = {
    __proto__:avo, attr2:'B'//herança avo
}

const filho = {
    __proto__:pai, attr3:'C'//herança pai
}