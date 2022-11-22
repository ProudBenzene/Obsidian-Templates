function get_random_color (text) { const gradientArr = [
    { "bgColor": "#EE9CA7, #FFDDE1", "textColor": "#333338" },
    { "bgColor": "#2193B0, #6DD5ED", "textColor": "#111116" },
    { "bgColor": "#C6FFDD, #FBD786, #F7797D", "textColor": "#333338" },
    { "bgColor": "#00B09B, #96C93D", "textColor": "#CCCCCF" },
    { "bgColor": "#12C2E9, #C471ED, #F64F59", "textColor": "#111116" },
    { "bgColor": "#B92B27, #1565C0", "textColor": "#CCCCCF" },
    { "bgColor": "#373B44, #4286F4", "textColor": "#CCCCCF" },
    { "bgColor": "#2980B9, #6DD5FA, #FFFFFF", "textColor": "#333338" },
    { "bgColor": "#FF0099, #493240", "textColor": "#CCCCCF" },
    { "bgColor": "#AA4B6B, #6B6B83, #3B8D99", "textColor": "#111116" },
    { "bgColor": "#8E2DE2, #4A00E0", "textColor": "#111116" },
    { "bgColor": "#1F4037, #99F2C8", "textColor": "#111116" },
    { "bgColor": "#F953C6, #B91D73", "textColor": "#111116" },
    { "bgColor": "#7F7FD5, #86A8E7, #91EAE4", "textColor": "#333338" },
    { "bgColor": "#C31432, #240B36", "textColor": "#CCCCCF" },
    { "bgColor": "#F12711, #F5AF19", "textColor": "#111116" },
    { "bgColor": "#659999, #F4791F", "textColor": "#111116" },
    { "bgColor": "#DD3E54, #6BE585", "textColor": "#111116" },
    { "bgColor": "#8360C3, #2EBF91", "textColor": "#111116" },
    { "bgColor": "#544A7D, #FFD452", "textColor": "#111116" },
    { "bgColor": "#009FFF, #EC2F4B", "textColor": "#111116" },
    { "bgColor": "#654EA3, #EAAFC8", "textColor": "#111116" },
    { "bgColor": "#FF416C, #FF4B2B", "textColor": "#111116" },
    { "bgColor": "#8A2387, #E94057, #F27121", "textColor": "#111116" },
    { "bgColor": "#A8FF78, #78FFD6", "textColor": "#333338" },
    { "bgColor": "#1E9600, #FFF200, #FF0000", "textColor": "#CCCCCF" },
    { "bgColor": "#ED213A, #93291E", "textColor": "#CCCCCF" },
    { "bgColor": "#FDC830, #F37335", "textColor": "#111116" },
    { "bgColor": "#00B4DB, #0083B0", "textColor": "#CCCCCF" },
    { "bgColor": "#FFEFBA, #FFFFFF", "textColor": "#333338" },
    { "bgColor": "#59C173, #A17FE0, #5D26C1", "textColor": "#111116" },
    { "bgColor": "#005AA7, #FFFDE4", "textColor": "#111116" },
    { "bgColor": "#DA4453, #89216B", "textColor": "#CCCCCF" },
    { "bgColor": "#636363, #A2AB58", "textColor": "#CCCCCF" },
    { "bgColor": "#AD5389, #3C1053", "textColor": "#CCCCCF" },
    { "bgColor": "#A8C0FF, #3F2B96", "textColor": "#111116" },
    { "bgColor": "#333333, #DD1818", "textColor": "#CCCCCF" },
    { "bgColor": "#4E54C8, #8F94FB", "textColor": "#111116" },
    { "bgColor": "#355C7D, #6C5B7B, #C06C84", "textColor": "#111116" },
    { "bgColor": "#BC4E9C, #F80759", "textColor": "#111116" },
    { "bgColor": "#40E0D0, #FF8C00, #FF0080", "textColor": "#111116" },
    { "bgColor": "#3E5151, #DECBA4", "textColor": "#111116" },
    { "bgColor": "#11998E, #38EF7D", "textColor": "#111116" },
    { "bgColor": "#108DC7, #EF8E38", "textColor": "#111116" },
    { "bgColor": "#FC5C7D, #6A82FB", "textColor": "#111116" },
    { "bgColor": "#FC466B, #3F5EFB", "textColor": "#111116" },
    { "bgColor": "#C94B4B, #4B134F", "textColor": "#CCCCCF" },
    { "bgColor": "#23074D, #CC5333", "textColor": "#CCCCCF" },
    { "bgColor": "#FFFBD5, #B20A2C", "textColor": "#111116" },
    { "bgColor": "#0F0C29, #302B63, #24243E", "textColor": "#EEEEEF" },
    { "bgColor": "#D3CCE3, #E9E4F0", "textColor": "#333338" },
    { "bgColor": "#3C3B3F, #605C3C", "textColor": "#CCCCCF" },
    { "bgColor": "#CAC531, #F3F9A7", "textColor": "#111116" },
    { "bgColor": "#800080, #FFC0CB", "textColor": "#111116" },
    { "bgColor": "#00F260, #0575E6", "textColor": "#111116" },
    { "bgColor": "#FC4A1A, #F7B733", "textColor": "#111116" },
    { "bgColor": "#74EBD5, #ACB6E5", "textColor": "#333338" },
    { "bgColor": "#6D6027, #D3CBB8", "textColor": "#111116" },
    { "bgColor": "#03001E, #7303C0, #EC38BC, #FDEFF9", "textColor": "#111116" },
    { "bgColor": "#667DB6, #0082C8, #0082C8, #667DB6", "textColor": "#111116" },
    { "bgColor": "#ADA996, #F2F2F2, #DBDBDB, #EAEAEA", "textColor": "#333338" },
    { "bgColor": "#E1EEC3, #F05053", "textColor": "#333338" },
    { "bgColor": "#1A2A6C, #B21F1F, #FDBB2D", "textColor": "#CCCCCF" },
    { "bgColor": "#22C1C3, #FDBB2D", "textColor": "#111116" },
    { "bgColor": "#FF9966, #FF5E62", "textColor": "#111116" },
    { "bgColor": "#7F00FF, #E100FF", "textColor": "#111116" },
    { "bgColor": "#C9D6FF, #E2E2E2", "textColor": "#333338" },
    { "bgColor": "#396AFC, #2948FF", "textColor": "#111116" },
    { "bgColor": "#D9A7C7, #FFFCDC", "textColor": "#333338" },
    { "bgColor": "#0CEBEB, #20E3B2, #29FFC6", "textColor": "#111116" },
    { "bgColor": "#06BEB6, #48B1BF", "textColor": "#CCCCCF" },
    { "bgColor": "#642B73, #C6426E", "textColor": "#CCCCCF" },
    { "bgColor": "#1C92D2, #F2FCFE", "textColor": "#333338" },
    { "bgColor": "#000000, #0F9B0F", "textColor": "#EEEEEF" },
    { "bgColor": "#36D1DC, #5B86E5", "textColor": "#111116" },
    { "bgColor": "#CB356B, #BD3F32", "textColor": "#111116" },
    { "bgColor": "#3A1C71, #D76D77, #FFAF7B", "textColor": "#111116" },
    { "bgColor": "#283C86, #45A247", "textColor": "#CCCCCF" },
    { "bgColor": "#EF3B36, #FFFFFF", "textColor": "#333338" },
    { "bgColor": "#C0392B, #8E44AD", "textColor": "#111116" },
    { "bgColor": "#159957, #155799", "textColor": "#CCCCCF" },
    { "bgColor": "#000046, #1CB5E0", "textColor": "#CCCCCF" },
    { "bgColor": "#007991, #78FFD6", "textColor": "#111116" },
    { "bgColor": "#56CCF2, #2F80ED", "textColor": "#111116" },
    { "bgColor": "#F2994A, #F2C94C", "textColor": "#111116" },
    { "bgColor": "#EB5757, #000000", "textColor": "#CCCCCF" },
    { "bgColor": "#E44D26, #F16529", "textColor": "#111116" },
    { "bgColor": "#4AC29A, #BDFFF3", "textColor": "#111116" },
    { "bgColor": "#B2FEFA, #0ED2F7", "textColor": "#111116" },
    { "bgColor": "#30E8BF, #FF8235", "textColor": "#111116" },
    { "bgColor": "#D66D75, #E29587", "textColor": "#111116" },
    { "bgColor": "#20002C, #CBB4D4", "textColor": "#CCCCCF" },
    { "bgColor": "#C33764, #1D2671", "textColor": "#CCCCCF" },
    { "bgColor": "#F7971E, #FFD200", "textColor": "#111116" },
    { "bgColor": "#34E89E, #0F3443", "textColor": "#CCCCCF" },
    { "bgColor": "#6190E8, #A7BFE8", "textColor": "#333338" },
    { "bgColor": "#44A08D, #093637", "textColor": "#CCCCCF" },
    { "bgColor": "#200122, #6F0000", "textColor": "#EEEEEF" },
    { "bgColor": "#0575E6, #021B79", "textColor": "#CCCCCF" },
    { "bgColor": "#4568DC, #B06AB3", "textColor": "#111116" },
    { "bgColor": "#43C6AC, #191654", "textColor": "#CCCCCF" },
    { "bgColor": "#093028, #237A57", "textColor": "#CCCCCF" },
    { "bgColor": "#43C6AC, #F8FFAE", "textColor": "#111116" },
    { "bgColor": "#FFAFBD, #FFC3A0", "textColor": "#333338" },
    { "bgColor": "#F0F2F0, #000C40", "textColor": "#111116" },
    { "bgColor": "#E8CBC0, #636FA4", "textColor": "#111116" },
    { "bgColor": "#DCE35B, #45B649", "textColor": "#111116" },
    { "bgColor": "#C0C0AA, #1CEFFF", "textColor": "#111116" },
    { "bgColor": "#9CECFB, #65C7F7, #0052D4", "textColor": "#111116" },
    { "bgColor": "#DBE6F6, #C5796D", "textColor": "#333338" },
    { "bgColor": "#3494E6, #EC6EAD", "textColor": "#111116" },
    { "bgColor": "#67B26F, #4CA2CD", "textColor": "#111116" },
    { "bgColor": "#F3904F, #3B4371", "textColor": "#111116" },
    { "bgColor": "#EE0979, #FF6A00", "textColor": "#111116" },
    { "bgColor": "#A770EF, #CF8BF3, #FDB99B", "textColor": "#333338" },
    { "bgColor": "#41295A, #2F0743", "textColor": "#CCCCCF" },
    { "bgColor": "#F4C4F3, #FC67FA", "textColor": "#333338" },
    { "bgColor": "#00C3FF, #FFFF1C", "textColor": "#111116" },
    { "bgColor": "#FF7E5F, #FEB47B", "textColor": "#333338" },
    { "bgColor": "#FFFC00, #FFFFFF", "textColor": "#333338" },
    { "bgColor": "#FF00CC, #333399", "textColor": "#CCCCCF" },
    { "bgColor": "#DE6161, #2657EB", "textColor": "#111116" },
    { "bgColor": "#EF32D9, #89FFFD", "textColor": "#111116" },
    { "bgColor": "#3A6186, #89253E", "textColor": "#CCCCCF" },
    { "bgColor": "#4ECDC4, #556270", "textColor": "#111116" },
    { "bgColor": "#A1FFCE, #FAFFD1", "textColor": "#333338" },
    { "bgColor": "#BE93C5, #7BC6CC", "textColor": "#111116" },
    { "bgColor": "#BDC3C7, #2C3E50", "textColor": "#111116" },
    { "bgColor": "#FFD89B, #19547B", "textColor": "#111116" },
    { "bgColor": "#808080, #3FADA8", "textColor": "#111116" },
    { "bgColor": "#FCEABB, #F8B500", "textColor": "#111116" },
    { "bgColor": "#F85032, #E73827", "textColor": "#111116" },
    { "bgColor": "#F79D00, #64F38C", "textColor": "#111116" },
    { "bgColor": "#CB2D3E, #EF473A", "textColor": "#111116" },
    { "bgColor": "#56AB2F, #A8E063", "textColor": "#111116" },
    { "bgColor": "#000428, #004E92", "textColor": "#EEEEEF" },
    { "bgColor": "#42275A, #734B6D", "textColor": "#CCCCCF" },
    { "bgColor": "#141E30, #243B55", "textColor": "#EEEEEF" },
    { "bgColor": "#F00000, #DC281E", "textColor": "#111116" },
    { "bgColor": "#2C3E50, #FD746C", "textColor": "#111116" },
    { "bgColor": "#2C3E50, #4CA1AF", "textColor": "#CCCCCF" },
    { "bgColor": "#E96443, #904E95", "textColor": "#111116" },
    { "bgColor": "#0B486B, #F56217", "textColor": "#CCCCCF" },
    { "bgColor": "#3A7BD5, #3A6073", "textColor": "#CCCCCF" },
    { "bgColor": "#00D2FF, #928DAB", "textColor": "#111116" },
    { "bgColor": "#2196F3, #F44336", "textColor": "#111116" },
    { "bgColor": "#FF5F6D, #FFC371", "textColor": "#333338" },
    { "bgColor": "#FF4B1F, #FF9068", "textColor": "#111116" },
    { "bgColor": "#16BFFD, #CB3066", "textColor": "#111116" },
    { "bgColor": "#EECDA3, #EF629F", "textColor": "#333338" },
    { "bgColor": "#1D4350, #A43931", "textColor": "#CCCCCF" },
    { "bgColor": "#A80077, #66FF00", "textColor": "#CCCCCF" },
    { "bgColor": "#F7FF00, #DB36A4", "textColor": "#111116" },
    { "bgColor": "#FF4B1F, #1FDDFF", "textColor": "#111116" },
    { "bgColor": "#BA5370, #F4E2D8", "textColor": "#333338" },
    { "bgColor": "#E0EAFC, #CFDEF3", "textColor": "#333338" },
    { "bgColor": "#4CA1AF, #C4E0E5", "textColor": "#111116" },
    { "bgColor": "#000000, #434343", "textColor": "#EEEEEF" },
    { "bgColor": "#4B79A1, #283E51", "textColor": "#CCCCCF" },
    { "bgColor": "#834D9B, #D04ED6", "textColor": "#111116" },
    { "bgColor": "#0099F7, #F11712", "textColor": "#111116" },
    { "bgColor": "#2980B9, #2C3E50", "textColor": "#CCCCCF" },
    { "bgColor": "#5A3F37, #2C7744", "textColor": "#CCCCCF" },
    { "bgColor": "#4DA0B0, #D39D38", "textColor": "#111116" },
    { "bgColor": "#5614B0, #DBD65C", "textColor": "#111116" },
    { "bgColor": "#2F7336, #AA3A38", "textColor": "#CCCCCF" },
    { "bgColor": "#1E3C72, #2A5298", "textColor": "#CCCCCF" },
    { "bgColor": "#114357, #F29492", "textColor": "#111116" },
    { "bgColor": "#FD746C, #FF9068", "textColor": "#333338" },
    { "bgColor": "#EACDA3, #D6AE7B", "textColor": "#333338" },
    { "bgColor": "#6A3093, #A044FF", "textColor": "#111116" },
    { "bgColor": "#457FCA, #5691C8", "textColor": "#111116" },
    { "bgColor": "#B24592, #F15F79", "textColor": "#111116" },
    { "bgColor": "#C02425, #F0CB35", "textColor": "#111116" },
    { "bgColor": "#403A3E, #BE5869", "textColor": "#CCCCCF" },
    { "bgColor": "#C2E59C, #64B3F4", "textColor": "#333338" },
    { "bgColor": "#FFB75E, #ED8F03", "textColor": "#111116" },
    { "bgColor": "#8E0E00, #1F1C18", "textColor": "#EEEEEF" },
    { "bgColor": "#76B852, #8DC26F", "textColor": "#111116" },
    { "bgColor": "#673AB7, #512DA8", "textColor": "#CCCCCF" },
    { "bgColor": "#00C9FF, #92FE9D", "textColor": "#111116" },
    { "bgColor": "#F46B45, #EEA849", "textColor": "#111116" },
    { "bgColor": "#005C97, #363795", "textColor": "#CCCCCF" },
    { "bgColor": "#E53935, #E35D5B", "textColor": "#111116" },
    { "bgColor": "#FC00FF, #00DBDE", "textColor": "#111116" },
    { "bgColor": "#2C3E50, #3498DB", "textColor": "#CCCCCF" },
    { "bgColor": "#CCCCB2, #757519", "textColor": "#111116" },
    { "bgColor": "#304352, #D7D2CC", "textColor": "#111116" },
    { "bgColor": "#EE9CA7, #FFDDE1", "textColor": "#333338" },
    { "bgColor": "#BA8B02, #181818", "textColor": "#CCCCCF" },
    { "bgColor": "#525252, #3D72B4", "textColor": "#CCCCCF" },
    { "bgColor": "#004FF9, #FFF94C", "textColor": "#111116" },
    { "bgColor": "#6A9113, #141517", "textColor": "#CCCCCF" },
    { "bgColor": "#F1F2B5, #135058", "textColor": "#111116" },
    { "bgColor": "#D1913C, #FFD194", "textColor": "#111116" },
    { "bgColor": "#7B4397, #DC2430", "textColor": "#111116" },
    { "bgColor": "#8E9EAB, #EEF2F3", "textColor": "#333338" },
    { "bgColor": "#136A8A, #267871", "textColor": "#CCCCCF" },
    { "bgColor": "#00BF8F, #001510", "textColor": "#CCCCCF" },
    { "bgColor": "#FF0084, #33001B", "textColor": "#CCCCCF" },
    { "bgColor": "#833AB4, #FD1D1D, #FCB045", "textColor": "#111116" },
    { "bgColor": "#FEAC5E, #C779D0, #4BC0C8", "textColor": "#111116" },
    { "bgColor": "#6441A5, #2A0845", "textColor": "#CCCCCF" },
    { "bgColor": "#FFB347, #FFCC33", "textColor": "#111116" },
    { "bgColor": "#43CEA2, #185A9D", "textColor": "#CCCCCF" },
    { "bgColor": "#FFA17F, #00223E", "textColor": "#CCCCCF" },
    { "bgColor": "#360033, #0B8793", "textColor": "#CCCCCF" },
    { "bgColor": "#948E99, #2E1437", "textColor": "#CCCCCF" },
    { "bgColor": "#1E130C, #9A8478", "textColor": "#CCCCCF" },
    { "bgColor": "#D38312, #A83279", "textColor": "#CCCCCF" },
    { "bgColor": "#73C8A9, #373B44", "textColor": "#CCCCCF" },
    { "bgColor": "#ABBAAB, #FFFFFF", "textColor": "#333338" },
    { "bgColor": "#FDFC47, #24FE41", "textColor": "#111116" },
    { "bgColor": "#83A4D4, #B6FBFF", "textColor": "#333338" },
    { "bgColor": "#485563, #29323C", "textColor": "#CCCCCF" },
    { "bgColor": "#52C234, #061700", "textColor": "#CCCCCF" },
    { "bgColor": "#FE8C00, #F83600", "textColor": "#111116" },
    { "bgColor": "#00C6FF, #0072FF", "textColor": "#111116" },
    { "bgColor": "#70E1F5, #FFD194", "textColor": "#333338" },
    { "bgColor": "#556270, #FF6B6B", "textColor": "#111116" },
    { "bgColor": "#9D50BB, #6E48AA", "textColor": "#111116" },
    { "bgColor": "#780206, #061161", "textColor": "#CCCCCF" },
    { "bgColor": "#B3FFAB, #12FFF7", "textColor": "#111116" },
    { "bgColor": "#AAFFA9, #11FFBD", "textColor": "#111116" },
    { "bgColor": "#000000, #E74C3C", "textColor": "#CCCCCF" },
    { "bgColor": "#F0C27B, #4B1248", "textColor": "#CCCCCF" },
    { "bgColor": "#FF4E50, #F9D423", "textColor": "#111116" },
    { "bgColor": "#ADD100, #7B920A", "textColor": "#CCCCCF" },
    { "bgColor": "#FBD3E9, #BB377D", "textColor": "#111116" },
    { "bgColor": "#606C88, #3F4C6B", "textColor": "#CCCCCF" },
    { "bgColor": "#C9FFBF, #FFAFBD", "textColor": "#333338" },
    { "bgColor": "#649173, #DBD5A4", "textColor": "#111116" },
    { "bgColor": "#B993D6, #8CA6DB", "textColor": "#333338" },
    { "bgColor": "#870000, #190A05", "textColor": "#EEEEEF" },
    { "bgColor": "#00D2FF, #3A7BD5", "textColor": "#111116" },
    { "bgColor": "#D3959B, #BFE6BA", "textColor": "#333338" },
    { "bgColor": "#DAD299, #B0DAB9", "textColor": "#333338" },
    { "bgColor": "#F2709C, #FF9472", "textColor": "#333338" },
    { "bgColor": "#E6DADA, #274046", "textColor": "#111116" },
    { "bgColor": "#5D4157, #A8CABA", "textColor": "#111116" },
    { "bgColor": "#DDD6F3, #FAACA8", "textColor": "#333338" },
    { "bgColor": "#616161, #9BC5C3", "textColor": "#111116" },
    { "bgColor": "#50C9C3, #96DEDA", "textColor": "#111116" },
    { "bgColor": "#215F00, #E4E4D9", "textColor": "#111116" },
    { "bgColor": "#C21500, #FFC500", "textColor": "#CCCCCF" },
    { "bgColor": "#EFEFBB, #D4D3DD", "textColor": "#333338" },
    { "bgColor": "#FFEEEE, #DDEFBB", "textColor": "#333338" },
    { "bgColor": "#666600, #999966", "textColor": "#CCCCCF" },
    { "bgColor": "#DE6262, #FFB88C", "textColor": "#333338" },
    { "bgColor": "#E9D362, #333333", "textColor": "#CCCCCF" },
    { "bgColor": "#D53369, #CBAD6D", "textColor": "#111116" },
    { "bgColor": "#A73737, #7A2828", "textColor": "#CCCCCF" },
    { "bgColor": "#F857A6, #FF5858", "textColor": "#111116" },
    { "bgColor": "#4B6CB7, #182848", "textColor": "#CCCCCF" },
    { "bgColor": "#FC354C, #0ABFBC", "textColor": "#111116" },
    { "bgColor": "#414D0B, #727A17", "textColor": "#CCCCCF" },
    { "bgColor": "#E43A15, #E65245", "textColor": "#111116" },
    { "bgColor": "#C04848, #480048", "textColor": "#CCCCCF" },
    { "bgColor": "#5F2C82, #49A09D", "textColor": "#CCCCCF" },
    { "bgColor": "#EC6F66, #F3A183", "textColor": "#111116" },
    { "bgColor": "#7474BF, #348AC7", "textColor": "#111116" },
    { "bgColor": "#ECE9E6, #FFFFFF", "textColor": "#333338" },
    { "bgColor": "#DAE2F8, #D6A4A4", "textColor": "#333338" },
    { "bgColor": "#ED4264, #FFEDBC", "textColor": "#333338" },
    { "bgColor": "#DC2424, #4A569D", "textColor": "#111116" },
    { "bgColor": "#24C6DC, #514A9D", "textColor": "#111116" },
    { "bgColor": "#283048, #859398", "textColor": "#CCCCCF" },
    { "bgColor": "#3D7EAA, #FFE47A", "textColor": "#111116" },
    { "bgColor": "#1CD8D2, #93EDC7", "textColor": "#111116" },
    { "bgColor": "#232526, #414345", "textColor": "#CCCCCF" },
    { "bgColor": "#757F9A, #D7DDE8", "textColor": "#333338" },
    { "bgColor": "#5C258D, #4389A2", "textColor": "#CCCCCF" },
    { "bgColor": "#134E5E, #71B280", "textColor": "#CCCCCF" },
    { "bgColor": "#2BC0E4, #EAECC6", "textColor": "#111116" },
    { "bgColor": "#085078, #85D8CE", "textColor": "#111116" },
    { "bgColor": "#4776E6, #8E54E9", "textColor": "#111116" },
    { "bgColor": "#614385, #516395", "textColor": "#CCCCCF" },
    { "bgColor": "#1F1C2C, #928DAB", "textColor": "#CCCCCF" },
    { "bgColor": "#16222A, #3A6073", "textColor": "#CCCCCF" },
    { "bgColor": "#FF8008, #FFC837", "textColor": "#111116" },
    { "bgColor": "#1D976C, #93F9B9", "textColor": "#111116" },
    { "bgColor": "#EB3349, #F45C43", "textColor": "#111116" },
    { "bgColor": "#DD5E89, #F7BB97", "textColor": "#111116" },
    { "bgColor": "#4CB8C4, #3CD3AD", "textColor": "#111116" },
    { "bgColor": "#1FA2FF, #12D8FA, #A6FFCB", "textColor": "#111116" },
    { "bgColor": "#1D2B64, #F8CDDA", "textColor": "#111116" },
    { "bgColor": "#FF512F, #F09819", "textColor": "#111116" },
    { "bgColor": "#1A2980, #26D0CE", "textColor": "#CCCCCF" },
    { "bgColor": "#AA076B, #61045F", "textColor": "#CCCCCF" },
    { "bgColor": "#FF512F, #DD2476", "textColor": "#111116" },
    { "bgColor": "#F09819, #EDDE5D", "textColor": "#111116" },
    { "bgColor": "#403B4A, #E7E9BB", "textColor": "#111116" },
    { "bgColor": "#E55D87, #5FC3E4", "textColor": "#111116" },
    { "bgColor": "#003973, #E5E5BE", "textColor": "#111116" },
    { "bgColor": "#CC95C0, #DBD4B4, #7AA1D2", "textColor": "#333338" },
    { "bgColor": "#3CA55C, #B5AC49", "textColor": "#111116" },
    { "bgColor": "#348F50, #56B4D3", "textColor": "#111116" },
    { "bgColor": "#DA22FF, #9733EE", "textColor": "#111116" },
    { "bgColor": "#02AAB0, #00CDAC", "textColor": "#CCCCCF" },
    { "bgColor": "#EDE574, #E1F5C4", "textColor": "#333338" },
    { "bgColor": "#D31027, #EA384D", "textColor": "#111116" },
    { "bgColor": "#16A085, #F4D03F", "textColor": "#111116" },
    { "bgColor": "#603813, #B29F94", "textColor": "#CCCCCF" },
    { "bgColor": "#E52D27, #B31217", "textColor": "#111116" },
    { "bgColor": "#FF6E7F, #BFE9FF", "textColor": "#333338" },
    { "bgColor": "#77A1D3, #79CBCA, #E684AE", "textColor": "#111116" },
    { "bgColor": "#314755, #26A0DA", "textColor": "#CCCCCF" },
    { "bgColor": "#2B5876, #4E4376", "textColor": "#CCCCCF" },
    { "bgColor": "#E65C00, #F9D423", "textColor": "#111116" },
    { "bgColor": "#2193B0, #6DD5ED", "textColor": "#111116" },
    { "bgColor": "#CC2B5E, #753A88", "textColor": "#CCCCCF" },
    { "bgColor": "#EC008C, #FC6767", "textColor": "#111116" },
    { "bgColor": "#1488CC, #2B32B2", "textColor": "#CCCCCF" },
    { "bgColor": "#00467F, #A5CC82", "textColor": "#111116" },
    { "bgColor": "#076585, #FFFFFF", "textColor": "#111116" },
    { "bgColor": "#BBD2C5, #536976", "textColor": "#111116" },
    { "bgColor": "#9796F0, #FBC7D4", "textColor": "#333338" },
    { "bgColor": "#B79891, #94716B", "textColor": "#111116" },
    { "bgColor": "#BBD2C5, #536976, #292E49", "textColor": "#111116" },
    { "bgColor": "#536976, #292E49", "textColor": "#CCCCCF" },
    { "bgColor": "#ACB6E5, #86FDE8", "textColor": "#333338" },
    { "bgColor": "#FFE000, #799F0C", "textColor": "#CCCCCF" },
    { "bgColor": "#00416A, #E4E5E6", "textColor": "#111116" },
    { "bgColor": "#FFE259, #FFA751", "textColor": "#111116" },
    { "bgColor": "#799F0C, #ACBB78", "textColor": "#111116" },
    { "bgColor": "#5433FF, #20BDFF, #A5FECB", "textColor": "#111116" },
    { "bgColor": "#0052D4, #4364F7, #6FB1FC", "textColor": "#111116" },
    { "bgColor": "#334D50, #CBCAA5", "textColor": "#111116" },
    { "bgColor": "#00416A, #799F0C, #FFE000", "textColor": "#CCCCCF" },
    { "bgColor": "#F7F8F8, #ACBB78", "textColor": "#333338" },
    { "bgColor": "#FFE000, #799F0C", "textColor": "#CCCCCF" },
    { "bgColor": "#00416A, #E4E5E6", "textColor": "#111116"
    }
  ]
  const randomIndex = Math.round( Math.random()*gradientArr.length )
  return gradientArr[randomIndex].bgColor+'); color: '+gradientArr[randomIndex].textColor
}
module.exports = get_random_color;