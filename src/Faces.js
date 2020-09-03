import React, { Component } from 'react';

export default class Faces extends Component {

    state = {
        copySuccess: '',
        searchInput: '',
        faces: {
            "neutral_upsidedown_smalleye": '( .-. )', 
            "surprise_upsidedown_smalleye": '( .o.)', 
            "angry_smallface_slanteye": '( `·´ )', 
            "happy_bigface_smalleye": '( ° ͜ ʖ °)', 
            "happy_cheeks_smalleye": '( ͡° ͜ʖ ͡°)', 
            "neutral_dissatisfied_bigeye": '( ⚆ _ ⚆ )', 
            "entitled_arrowface_sleepyeye": '( ︶︿︶)', 
            "happy_smallface_smalleye": '( ﾟヮﾟ)', 
            "crabby_crabs_zoidberg": '(\\/)(°,,,°)(\\/)', 
            "displeased_jaded_angleye": '(¬_¬)', 
            // 10: '(¬º-°)¬', 
            // 11: '(¬‿¬)', 
            // 12: '(°ロ°)☝', 
            // 13: '(´・ω・)っ', 
            // 14: '(ó ì_í)', 
            // 15: '(ʘᗩʘ\')', 
            // 16: '(ʘ‿ʘ)', 
            // 17: '(̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄', 
            // 18: '(͡° ͜ʖ ͡°)', 
            // 19: '(ಠ_ಠ)', 
            // 20: '(ಠ‿ಠ)', 
            // 21: '(ಠ⌣ಠ)', 
            // 22: '(ಥ_ಥ)', 
            // 23: '(ಥ﹏ಥ)', 
            // 24: '(ง ͠° ͟ل͜ ͡°)ง', 
            // 25: '(ง ͡ʘ ͜ʖ ͡ʘ)ง', 
            // 26: '(ง •̀_•́)ง', 
            // 27: '(ง\'̀-\'́)ง', 
            // 28: '(ง°ل͜°)ง', 
            // 29: '(ง⌐□ل͜□)ง', 
            // 30: '(ღ˘⌣˘ღ)', 
            // 31: '(ᵔᴥᵔ)', 
            // 32: '(•ω•)', 
            // 33: '(•◡•)/', 
            // 34: '(⊙ω⊙)', 
            // 35: '(⌐■_■)', 
            // 36: '(─‿‿─)', 
            // 37: '(╯°□°）╯', 
            // 38: '(◕‿◕)', 
            // 39: '(☞ﾟ∀ﾟ)☞', 
            // 40: '(❍ᴥ❍ʋ)', 
            // 41: '(っ◕‿◕)っ', 
            // 42: '(づ｡◕‿‿◕｡)づ', 
            // 43: '(ノಠ益ಠ)ノ', 
            // 44: '(ノ・∀・)ノ', 
            // 45: '(；一_一)', 
            // 46: '(｀◔ ω ◔´)', 
            // 47: '(｡◕‿‿◕｡)', 
            // 48: '(ﾉ◕ヮ◕)ﾉ', 
            // 49: '*<{:¬{D}}}', 
            // 50: '=^.^=', 
            // 51: 't(-.-t)', 
            // 52: '| (• ◡•)|', 
            // 53: '~(˘▾˘~)', 
            // 54: '¬_¬', 
            // 55: '¯(°_o)/¯', 
            // 56: '¯_(ツ)_/¯', 
            // 57: '°Д°', 
            // 58: 'ɳ༼ຈل͜ຈ༽ɲ', 
            // 59: 'ʅʕ•ᴥ•ʔʃ', 
            // 60: 'ʕ´•ᴥ•`ʔ', 
            // 61: 'ʕ•ᴥ•ʔ', 
            // 62: 'ʕ◉.◉ʔ', 
            // 63: 'ʕㅇ호ㅇʔ', 
            // 64: 'ʕ；•`ᴥ•´ʔ', 
            // 65: 'ʘ‿ʘ', 
            // 66: '͡° ͜ʖ ͡°', 
            // 67: 'ζ༼Ɵ͆ل͜Ɵ͆༽ᶘ', 
            // 68: 'Ѱζ༼ᴼل͜ᴼ༽ᶘѰ', 
            // 69: 'ب_ب', 
            // 70: '٩◔̯◔۶', 
            // 71: 'ಠ_ಠ', 
            // 72: 'ಠoಠ', 
            // 73: 'ಠ~ಠ', 
            // 74: 'ಠ‿ಠ', 
            // 75: 'ಠ⌣ಠ', 
            // 76: 'ಠ╭╮ಠ', 
            // 77: 'ರ_ರ', 
            // 78: 'ง ͠° ل͜ °)ง', 
            // 79: '๏̯͡๏﴿', 
            // 80: '༼ ºººººل͟ººººº ༽', 
            // 81: '༼ ºل͟º ༽', 
            // 82: '༼ ºل͟º༼', 
            // 83: '༼ ºل͟º༽', 
            // 84: '༼ ͡■ل͜ ͡■༽', 
            // 85: '༼ つ ◕_◕ ༽つ', 
            // 86: '༼ʘ̚ل͜ʘ̚༽', 
            // 87: 'ლ(´ڡ`ლ)', 
            // 88: 'ლ(́◉◞౪◟◉‵ლ)', 
            // 89: 'ლ(ಠ益ಠლ)', 
            // 90: 'ᄽὁȍ ̪őὀᄿ', 
            // 91: 'ᔑ•ﺪ͟͠•ᔐ', 
            // 92: 'ᕕ( ᐛ )ᕗ', 
            // 93: 'ᕙ(⇀‸↼‶)ᕗ', 
            // 94: 'ᕙ༼ຈل͜ຈ༽ᕗ', 
            // 95: 'ᶘ ᵒᴥᵒᶅ', 
            // 96: '‎‎(ﾉಥ益ಥ）ﾉ', 
            // 97: '≧☉_☉≦', 
            // 98: '⊙▃⊙', 
            // 99: '⊙﹏⊙', 
            // 100: '┌( ಠ_ಠ)┘', 
            // 101: '╚(ಠ_ಠ)=┐', 
            // 102: '◉_◉', 
            // 103: '◔ ⌣ ◔', 
            // 104: '◔̯◔', 
            // 105: '◕‿↼', 
            // 106: '◕‿◕', 
            // 107: '☉_☉', 
            // 108: '☜(⌒▽⌒)☞', 
            // 109: '☼.☼', 
            // 110: '♥‿♥', 
            // 111: '⚆ _ ⚆', 
            // 112: '✌(-‿-)✌', 
            // 113: '〆(・∀・＠)', 
            // 114: 'ノ( º _ ºノ)', 
            // 115: 'ノ( ゜-゜ノ)', 
            // 116: 'ヽ( ͝° ͜ʖ͡°)ﾉ', 
            // 117: 'ヽ(`Д´)ﾉ', 
            // 118: 'ヽ༼° ͟ل͜ ͡°༽ﾉ', 
            // 119: 'ヽ༼ʘ̚ل͜ʘ̚༽ﾉ', 
            // 120: 'ヽ༼ຈل͜ຈ༽ง', 
            // 121: 'ヽ༼ຈل͜ຈ༽ﾉ', 
            // 122: 'ヽ༼Ὸل͜ຈ༽ﾉ', 
            // 123: 'ヾ(⌐■_■)ノ', 
            // 124: '꒰･◡･๑꒱', 
            // 125: '﴾͡๏̯͡๏﴿', 
            // 126: '｡◕‿◕｡', 
            // 127: 'ʕノ◔ϖ◔ʔノ', 
            // 128: '꒰•̥̥̥̥̥̥̥ ﹏ •̥̥̥̥̥̥̥̥๑꒱', 
            // 129: 'ಠ_ರೃ', 
            // 130: '(ू˃̣̣̣̣̣̣︿˂̣̣̣̣̣̣ ू)', 
            // 131: '(ꈨຶꎁꈨຶ)۶”', 
            // 132: '(ꐦ°᷄д°᷅)', 
            // 133: '(۶ૈ ۜ ᵒ̌▱๋ᵒ̌ )۶ૈ=͟͟͞͞ ⌨', 
            // 134: '₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛', 
            // 135: '(*ﾟ⚙͠ ∀ ⚙͠)ﾉ❣', 
            // 136: '٩꒰･ัε･ั ꒱۶', 
            // 137: 'ヘ（。□°）ヘ', 
            // 138: '˓˓(ृ　 ु ॑꒳’)ु(ृ’꒳ ॑ ृ　)ु˒˒˒', 
            // 139: '꒰✘Д✘◍꒱', 
            // 140: '૮( ᵒ̌ૢཪᵒ̌ૢ )ა', 
            // 141: '“ψ(｀∇´)ψ', 
            // 142: 'ಠﭛಠ', 
            // 143: '(๑>ᴗ<๑)', 
            // 144: '(۶ꈨຶꎁꈨຶ )۶ʸᵉᵃʰᵎ', 
            // 145: '٩(•̤̀ᵕ•̤́๑)ᵒᵏᵎᵎᵎᵎ', 
            // 146: '(oT-T)尸', 
            // 147: '(✌ﾟ∀ﾟ)☞', 
            // 148: 'ಥ‿ಥ', 
            // 149: 'ॱ॰⋆(˶ॢ‾᷄﹃‾᷅˵ॢ)', 
            // 150: '┬┴┬┴┤  (ಠ├┬┴┬┴', 
            // 151: '( ˘ ³˘)♥', 
            // 152: 'Σ (੭ु ຶਊ ຶ)੭ु⁾⁾', 
            // 153: '(⑅ ॣ•͈ᴗ•͈ ॣ)', 
            // 154: 'ヾ(´￢｀)ﾉ', 
            // 155: '(•̀o•́)ง', 
            // 156: '(๑•॒̀ ູ॒•́๑)', 
            // 157: '⚈้̤͡ ˌ̫̮ ⚈้̤͡', 
            // 158: '=͟͟͞͞ =͟͟͞͞ ﾍ( ´Д`)ﾉ', 
            // 159: '(((╹д╹;)))', 
            // 160: '•̀.̫•́✧', 
            // 161: '(ᵒ̤̑ ₀̑ ᵒ̤̑)', 
            // 162: '\_(ʘ_ʘ)_/'
        } 
    }

    renderFaces = e => {
        let faces = this.state.faces
        let facesHtml = []
        let regex = new RegExp(`${this.state.searchInput}`, 'g')
        // let serachWord = this.state.searchInput
        if (this.state.searchInput === "") {
            for (let key in faces) {
                facesHtml.push(
                    <button 
                    onClick={this.copyFaces}
                    className="face-container">
                        {faces[key]}
                    </button>
                )
            }
            return facesHtml
        } else {
            // if search bar has some text, loop over and if condition is true push item into arr. 
            for (let key in faces) {
                if (key.match(regex)) {
                    facesHtml.push(
                        <button
                            onClick={this.copyFaces}
                            className="face-container">
                            {faces[key]}
                        </button>
                    )
                }
            }
            return facesHtml
        }
        // return this.state.faces.map(face => {
        //     return (
        //         <button 
        //             onClick={this.copyFaces}
        //             className="face-container">
        //                 {face.test_face_data}
        //         </button>
        //     )
        // })
        
    }

    handleSearchInput = (e) => {
        this.setState({
            copySuccess: this.state.copySuccess,
            searchInput: e.target.value,
            faces: this.state.faces
        })
        this.renderFaces()
    }

    copyFaces = e => {
        navigator.clipboard.writeText(e.target.innerHTML)
    }

    render() {

        return (
            <div >
                <nav>
                    <h1>FA(S)Ciie Hall of Fame</h1>
                    <p>If you made it here, you've made it in life.</p>
                    {/* put search icon here next to input field*/}
                    <input onChange={this.handleSearchInput}
                        className="search-bar"
                        type="text"
                        id="search" />
                    <a href="#">*click to copy</a>
                </nav>
                <div className="faces-grid">
                    {this.renderFaces()}  
                </div>
                
            </div>
        )
    }
}