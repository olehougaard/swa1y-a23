import { boundProperty } from "./bound_property"

const reverse = (s: string) => s.split("").reverse().join("")
const normalProperty = boundProperty.initialized("reverse") 
const reverseProperty = boundProperty.computed(normalProperty, reverse, reverse)

const normal = window.document.getElementById('normal') as HTMLInputElement
const componentProperty = boundProperty.fromAttribute(normal, 'value', l => normal.addEventListener('input', l))

const reversed = window.document.getElementById('reversed') as HTMLInputElement
const reverseComponentProperty = boundProperty.fromAttribute(reversed, 'value', l => reversed.addEventListener('input', l))

normalProperty.doubleBind(componentProperty)
reverseProperty.doubleBind(reverseComponentProperty)
