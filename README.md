# node-red-contrib-google-translate-fixed
Node-RED node for Google Translate

Based on <a href="https://www.npmjs.com/package/node-red-contrib-google-translate">This package    </a>

Install
-------
Run the following command in your Node-RED user directory - typically `~/.node-red`

        npm install node-red-contrib-google-translate

Example
-------
String data in msg.payload will be translated into language specified in node property.

![flow.png](flow.png)

More than 100 languages are supported in the Google Translate node.

![property.png](property.png)

Usage
-------
Translate from German to English. This will result poision.

msg.payload.from = 'en';
msg.payload.to = 'de';
msg.payload.phrase = 'gift';




Language codes
--------------

</br>'en' English
</br>'ja' Japanese
</br>'de' German
</br>'fr' French
</br>'ko' Korean
</br>'zh-cn' Chinese Simplified
</br>'zh-tw' Chinese Traditional
</br>'af' Afrikaans
</br>'sq' Albanian
</br>'am' Amharic
</br>'ar' Arabic
</br>'hy' Armenian
</br>'az' Azerbaijani
</br>'eu' Basque
</br>'be' Belarusian
</br>'bn' Bengali
</br>'bs' Bosnian
</br>'bg' Bulgarian
</br>'ca' Catalan
</br>'ceb' Cebuano
</br>'ny' Chichewa
</br>'co' Corsican
</br>'hr' Croatian
</br>'cs' Czech
</br>'da' Danish
</br>'nl' Dutch
</br>'eo' Esperanto
</br>'et' Estonian
</br>'tl' Filipino
</br>'fi' Finnish
</br>'fy' Frisian
</br>'gl' Galician
</br>'ka' Georgian
</br>'el' Greek
</br>'gu' Gujarati
</br>'ht' Haitian Creole
</br>'ha' Hausa
</br>'haw' Hawaiian
</br>'iw' Hebrew
</br>'hi' Hindi
</br>'hmn' Hmong
</br>'hu' Hungarian
</br>'is' Icelandic
</br>'ig' Igbo
</br>'id' Indonesian
</br>'ga' Irish
</br>'it' Italian
</br>'jw' Javanese
</br>'kn' Kannada
</br>'kk' Kazakh
</br>'km' Khmer
</br>'ku' Kurdish (Kurmanji)
</br>'ky' Kyrgyz
</br>'lo' Lao
</br>'la' Latin
</br>'lv' Latvian
</br>'lt' Lithuanian
</br>'lb' Luxembourgish
</br>'mk' Macedonian
</br>'mg' Malagasy
</br>'ms' Malay
</br>'ml' Malayalam
</br>'mt' Maltese
</br>'mi' Maori
</br>'mr' Marathi
</br>'mn' Mongolian
</br>'my' Myanmar (Burmese)
</br>'ne' Nepali
</br>'no' Norwegian
</br>'ps' Pashto
</br>'fa' Persian
</br>'pl' Polish
</br>'pt' Portuguese
</br>'ma' Punjabi
</br>'ro' Romanian
</br>'ru' Russian
</br>'sm' Samoan
</br>'gd' Scots Gaelic
</br>'sr' Serbian
</br>'st' Sesotho
</br>'sn' Shona
</br>'sd' Sindhi
</br>'si' Sinhala
</br>'sk' Slovak
</br>'sl' Slovenian
</br>'so' Somali
</br>'es' Spanish
</br>'su' Sundanese
</br>'sw' Swahili
</br>'sv' Swedish
</br>'tg' Tajik
</br>'ta' Tamil
</br>'te' Telugu
</br>'th' Thai
</br>'tr' Turkish
</br>'uk' Ukrainian
</br>'ur' Urdu
</br>'uz' Uzbek
</br>'vi' Vietnamese
</br>'cy' Welsh
</br>'xh' Xhosa
</br>'yi' Yiddish
</br>'yo' Yoruba
</br>'zu' Zulu