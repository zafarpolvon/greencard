import ru from '../locales/ru.json'
import uz from '../locales/uz.json'
import store from '../store'

const locales = {
    'ru-RU': ru,
    'uz-UZ': uz   
}

export default function localizeFilter(key) {
    const locale = store.getters.locale || 'ru-RU'
    return locales[locale][key] || `[Localize error]: key ${key} not found`

}