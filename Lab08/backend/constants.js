const RESULTS_MAP = {
    'ISTJ': {
      title: 'Introverted, Sensing, Thinking, Judging people like METAL',
      contents: "Virtuosity is a key component of metal, with some groups going to formidable lengths to achieve dizzying symphonic complexity in their compositions, a trait that INTJ listeners may admire greatly. Artists like Yngwie Malmsteen, DragonForce, or Meshuggah may leave ISTJs awestruck, thoroughly spoiling them for music of lesser technical sophistication."
    },
    'ISFJ': {
      title: 'Introverted, Sensing, Feeling, Judging people like GOSPEL',
      contents: "ISFJ listeners may identify with the sense of tradition and order that comes from spiritual music. Moreover, the natural humility of ISFJ listeners may make the outlandish posturing of so many popular performers – the self-promotion that is often as much a marketing decision as it is a facet of the artist’s own personality – seem even more ridiculous and discordant than it does for most."
    },
    'INFJ': {
      title: 'Introverted, Intuitive, Feeling, Judging people like ALTERNATIVE ROCK',
      contents: "INFJs are a highly cause-oriented personality type, and as such, they may be attracted to insurgent musical acts, bands that herald a revolution in their respective genres. Alternative rock in general, then, may hold great appeal for INFJs, for whom groups like Nirvana, Radiohead, or Arcade Fire are more than simply artists – they are symbols for vast cultural upheavals, simmering just beneath the surface."
    },
    'INTJ': {
      title: 'Introverted, Intuitive, Thinking, Judging people like CLASSICAL',
      contents: "To the ears of an INTJ, even the catchiest popular tune may be intrinsically dull, when compared to the byzantine compositions of the Baroque age. As an INTJ appreciates any creation that contains a wealth of hidden intricacies, so too might they marvel at the works of Bach, Handel, or Vivaldi."
    },
    'ISFP': {
      title: 'Introverted, Sensing, Feeling, Percieving people like REGGAE',
      contents: "For an ISFP, life often feels like a frenetic scream just outside their window, and the relaxing, soulful sounds of reggae may be the perfect antidote to soothe their jangled nerves. The sense of “one love” expressed through the lyrics and voices of reggae singers like Jimmy Cliff or Gregory Isaacs may provide ISFP personalities with the harmony that can be sorely lacking in their everyday existence."
    },
    'ISTP': {
      title: 'Introverted, Sensing, Thinking, Percieving like PUNK',
      contents: "The DIY ethic epitomized by punk may have a kindred spirit in the ISTP personality, a group of people who believe that a hands-on approach is always preferable to hours of purely academic study. Namely, the stripped-down, no-frills punk of The Stooges, The Sex Pistols, and The Ramones has a visceral feel that a Virtuoso has no need to intellectualize or rationalize – only to experience."
    },
    'INFP': {
      title: 'Introverted, Intuitive, Feeling, Percieving people like PUNK',
      contents: "For many of us, music can serve as an outlet for the feelings that we otherwise have a hard time expressing, and the aggressive, in-your-face style of punk may fulfill that function for INFPs, who so often find themselves repressing their negative emotions for fear of hurting those around them. Of course, angst is a key component of countless genres, but there may be something in the absence of artifice, the sheer rawness, of punk that appeals to INFPs, for whom bands like Minor Threat or Hüsker Dü might vocalize the anguish that they so often stifle. And while the term emo has become perhaps irretrievably stigmatized, INFPs might be particularly drawn to those punk bands that turn inward more than lashing outward, such as Jawbreaker or Jimmy Eat World."
    },
    'INTP': {
      title: 'Introverted, Intuitive, Thinking, Percieving people like PUNK',
      contents: "At first glance, the anarchic rhythms of punk might seem an odd fit for a INTP's quiet, detached demeanor, but if one looks past the caricature of leather jacketed and liberty spiked moshers to the origins of punk rock itself, the affinity becomes far more understandable. Just as punk began as a rule-breaking reaction to overly polished studio rock, INTPs also tend to have little patience – or respect – for tradition. Whether rejecting the status quo in a political sense (as with The Clash, Dead Kennedys, or Gang of Four) or pushing the envelope more towards the avant-garde (art punks like Devo, Talking Heads, or Yeah Yeah Yeahs), the smart, transgressive qualities of punk may hold endless appeal for the INTP personality type."
    },
    'ESTP': {
      title: 'Extraverted, Sensing, Thinking, Percieving people like METAL',
      contents: "Fast, loud, and heavy: attributes as easily applied to ESTPs as to the brand of music that comes roaring out of their speakers on a regular basis. Although people with the ESTP personality type may steer clear of some of the more extreme elements in metal, few can deny the simple headbanging pleasures of Motörhead, Guns N’ Roses, or Metallica."
    },
    'ESFP': {
      title: 'Extraverted, Sensing, Feeling, Percieving people like AMBIENT',
      contents: "ESFP personalities may love to entertain, but they hate it when something steals the spotlight, as is often the case with most musical genres. Ambient music, however, exists more to accentuate than dominate, highlighting the performance of the ESFPs, rather than distracting from it."
    },
    'ENFP': {
      title: 'Extraverted, Intuitive, Feeling, Percieving people like JAZZ',
      contents: "ENFPs have a habit of stretching themselves too thin, which tends to happen when one attempts the sort of all-encompassing, paradigm-shifting projects that are a ENFP's passion in life. Fortunately for the personality type, ENFPs understand the value of down time, and cool jazz performers like Dave Brubeck or Chet Baker may be just what they need to do after a hard day of saving the world."
    },
    'ENTP': {
      title: 'Extraverted, Intuitive, Thinking, Percieving people like CLASSICAL',
      contents: "For ENTPs, the intellectual challenge of comprehending the complex tonal structures of classical music may be a key part of their enjoyment of the form. As with everything else, though, ENTPs might particularly love those composers who push orchestral music in strange directions – even at the risk of unsettling an audience – such as Igor Stravinsky or John Cage."
    },
    'ESTJ': {
      title: 'Extraverted, Sensing, Thinking, Judging people like HIP-HOP',
      contents: "The past few decades have seen hip-hop grow from underground phenomenon to niche market to omnipresent juggernaut, listened to around the globe and influencing music of every genre. Where once rap may have been too outré for ESTJs to tune in, it has now permeated culture to such a degree that, for all intents and purposes, rap music is pop music. And while ESTJs may have little knowledge of or interest in old-school rhymes, artists like Kanye West or Drake may be simply too popular to ignore."
    },
    'ESFJ': {
      title: 'Extraverted, Sensing, Feeling, Judging people like POP',
      contents: "Pop music can be thought of as the soundtrack of society, and ESFJs never want to be left out of the chorus. Whether it is Michael Jackson, Madonna, or Justin Bieber who currently dominates the charts, ESFJs are quick to share the tastes of their peers, and loathe to be ignorant of the songs on everyone’s lips."
    },
    'ENFJ': {
      title: 'Extraverted, Intuitive, Feeling, Judging people like JAZZ',
      contents: "As a personality type that is positively brimming with enthusiasm and confidence, ENFJs might very well seek out music that is equally brassy and bold, such as that of the big band era of jazz. Exciting and infectious, the swinging sounds of Duke Ellington or Glenn Miller may be all the excuse that a ENFJ needs to turn their living room into a ballroom."    
    },
    'ENTJ': {
      title: 'Extraverted, Intuitive, Thinking, Judging people like JAZZ',
      contents: "The genius of jazz may be in improvisation, but it is an improvisation born of absolute mastery of one’s instrument, lending an uncanny prescience to one’s movements, ensuring that each will be in service to some unwritten sonata. Unpredictable yet unerringly precise, the bebop stylings of Miles Davis, John Coltrane, or Thelonious Monk may remind ENTJs of the same qualities that they prize in themselves."
    }
}

module.exports = Object.freeze(RESULTS_MAP); //allow the constants to be exported from this file
  