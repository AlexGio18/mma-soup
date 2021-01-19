import flags from '../json/flagcodes'

export const flag_api = {
    getFlags (country) {
        for (var f in flags) {
            if (flags[f] === country) {
                return "https://flagcdn.com/w40/" + f + ".png"
            }
        }
    }
}