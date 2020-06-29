const fs = require('fs');

const arr = [
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2038,
            y: 1418,
            width: 154,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2046.65,
                y: 1437.34,
                name: 'Авиамоторная'
            }
        ],
        stationName: 'Авиамоторная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1831,
            y: 1753,
            width: 160,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1839.99,
                y: 1772.34,
                name: 'Автозаводская'
            }
        ],
        stationName: 'Автозаводская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1328,
            y: 1942,
            width: 167,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1337.38,
                y: 1961.34,
                name: 'Академическая'
            }
        ],
        stationName: 'Академическая'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1386,
            y: 1513,
            width: 233,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1399.09,
                y: 1532.34,
                name: 'Александровский сад'
            }
        ],
        stationName: 'Александровский сад'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1689,
            y: 914,
            width: 148,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1697.31,
                y: 933.336,
                name: 'Алексеевская'
            }
        ],
        stationName: 'Алексеевская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2354,
            y: 2308,
            width: 161,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2363.04,
                y: 2327.34,
                name: 'Алма-Атинская'
            }
        ],
        stationName: 'Алма-Атинская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1315,
            y: 536,
            width: 116,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1321.52,
                y: 555.336,
                name: 'Алтуфьево'
            }
        ],
        stationName: 'Алтуфьево'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2129,
            y: 1391,
            width: 129,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2136.25,
                y: 1410.34,
                name: 'Андроновка'
            }
        ],
        stationName: 'Андроновка'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 281,
            y: 636,
            width: 113,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 287.348,
                y: 655.336,
                name: 'Аникеевка'
            }
        ],
        stationName: 'Аникеевка'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1680,
            y: 2333,
            width: 82,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1684.61,
                y: 2352.34,
                name: 'Аннино'
            }
        ],
        stationName: 'Аннино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1233,
            y: 1512,
            width: 110,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1239.18,
                y: 1531.34,
                name: 'Арбатская'
            }
        ],
        stationName: 'Арбатская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1275,
            y: 1486,
            width: 111,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1281.24,
                y: 1505.34,
                name: 'Арбатская'
            }
        ],
        stationName: 'Арбатская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1117,
            y: 1029,
            width: 100,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1122.62,
                y: 1048.34,
                name: 'Аэропорт'
            }
        ],
        stationName: 'Аэропорт'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1689,
            y: 585,
            width: 153,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1697.6,
                y: 604.336,
                name: 'Бабушкинская'
            }
        ],
        stationName: 'Бабушкинская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 561,
            y: 1522,
            width: 185,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 571.393,
                y: 1541.34,
                name: 'Багратионовская'
            }
        ],
        stationName: 'Багратионовская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 308,
            y: 1123,
            width: 90,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 313.056,
                y: 1142.34,
                name: 'Баковка'
            }
        ],
        stationName: 'Баковка'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1007,
            y: 878,
            width: 124,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1013.97,
                y: 897.336,
                name: 'Балтийская'
            }
        ],
        stationName: 'Балтийская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1161,
            y: 1308,
            width: 142,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1168.98,
                y: 1327.34,
                name: 'Баррикадная'
            }
        ],
        stationName: 'Баррикадная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1817,
            y: 1294,
            width: 128,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1824.19,
                y: 1313.34,
                name: 'Бауманская'
            }
        ],
        stationName: 'Бауманская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1041,
            y: 1270,
            width: 89,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1046,
                y: 1289.34,
                name: 'Беговая'
            }
        ],
        stationName: 'Беговая'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1849,
            y: 766,
            width: 155,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1857.71,
                y: 785.336,
                name: 'Белокаменная'
            }
        ],
        stationName: 'Белокаменная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 902,
            y: 705,
            width: 142,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 909.978,
                y: 724.336,
                name: 'Беломорская'
            }
        ],
        stationName: 'Беломорская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1248,
            y: 1154,
            width: 134,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1255.53,
                y: 1173.34,
                name: 'Белорусская'
            }
        ],
        stationName: 'Белорусская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1328,
            y: 2134,
            width: 91,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1333.11,
                y: 2153.34,
                name: 'Беляево'
            }
        ],
        stationName: 'Беляево'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1087,
            y: 587,
            width: 149,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1095.37,
                y: 606.336,
                name: 'Бескудниково'
            }
        ],
        stationName: 'Бескудниково'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1315,
            y: 583,
            width: 102,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1320.73,
                y: 602.336,
                name: 'Бибирево'
            }
        ],
        stationName: 'Бибирево'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1386,
            y: 1547,
            width: 154,
            height: 49,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1394.65,
                y: 1566.84,
                name: 'Библиотека'
            },
            {
                type: 'Shapes.Text',
                x: 1394.65,
                y: 1589.84,
                name: 'имени Ленина'
            }
        ],
        stationName: 'Библиотека имени Ленина'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1907,
            y: 2427,
            width: 66,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1910.71,
                y: 2446.34,
                name: 'Битца'
            }
        ],
        stationName: 'Битца'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1230,
            y: 2335,
            width: 183,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1240.28,
                y: 2354.34,
                name: 'Битцевский парк'
            }
        ],
        stationName: 'Битцевский парк'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2230,
            y: 2166,
            width: 106,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2235.96,
                y: 2185.34,
                name: 'Борисово'
            }
        ],
        stationName: 'Борисово'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1224,
            y: 1571,
            width: 128,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1231.19,
                y: 1590.34,
                name: 'Боровицкая'
            }
        ],
        stationName: 'Боровицкая'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 772,
            y: 2083,
            width: 184,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 782.337,
                y: 2102.34,
                name: 'Боровское шоссе'
            }
        ],
        stationName: 'Боровское шоссе'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1689,
            y: 679,
            width: 192,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1699.79,
                y: 698.336,
                name: 'Ботанический сад'
            }
        ],
        stationName: 'Ботанический сад'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2230,
            y: 2047,
            width: 163,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2239.16,
                y: 2066.34,
                name: 'Братиславская'
            }
        ],
        stationName: 'Братиславская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1420,
            y: 2518,
            width: 208,
            height: 46,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1541.02,
                y: 2536.34,
                name: 'Бульвар'
            },
            {
                type: 'Shapes.Text',
                x: 1434.71,
                y: 2559.34,
                name: 'Адмирала Ушакова'
            }
        ],
        stationName: 'Бульвар Адмирала Ушакова'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1680,
            y: 2373,
            width: 203,
            height: 48,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1691.4,
                y: 2392.34,
                name: 'Бульвар'
            },
            {
                type: 'Shapes.Text',
                x: 1691.4,
                y: 2415.34,
                name: 'Дмитрия Донского'
            }
        ],
        stationName: 'Бульвар Дмитрия Донского'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1907,
            y: 810,
            width: 159,
            height: 47,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1915.93,
                y: 828.836,
                name: 'Бульвар'
            },
            {
                type: 'Shapes.Text',
                x: 1915.93,
                y: 851.836,
                name: 'Рокоссовского'
            }
        ],
        stationName: 'Бульвар Рокоссовского'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1514,
            y: 2647,
            width: 114,
            height: 46,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1523.03,
                y: 2665.34,
                name: 'Бунинская'
            },
            {
                type: 'Shapes.Text',
                x: 1564.95,
                y: 2688.34,
                name: 'Аллея'
            }
        ],
        stationName: 'Бунинская Аллея'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1907,
            y: 2487,
            width: 74,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1911.16,
                y: 2506.34,
                name: 'Бутово'
            }
        ],
        stationName: 'Бутово'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1495,
            y: 892,
            width: 114,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1501.4,
                y: 911.336,
                name: 'Бутырская'
            }
        ],
        stationName: 'Бутырская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1689,
            y: 814,
            width: 67,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1692.76,
                y: 833.336,
                name: 'ВДНХ'
            }
        ],
        stationName: 'ВДНХ'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1799,
            y: 2109,
            width: 132,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1806.42,
                y: 2128.34,
                name: 'Варшавская'
            }
        ],
        stationName: 'Варшавская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1693,
            y: 1829,
            width: 91,
            height: 48,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1698.11,
                y: 1848.34,
                name: 'Верхние'
            },
            {
                type: 'Shapes.Text',
                x: 1698.11,
                y: 1871.34,
                name: 'Котлы'
            }
        ],
        stationName: 'Верхние Котлы'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1013,
            y: 654,
            width: 107,
            height: 48,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1037.44,
                y: 673.336,
                name: 'Верхние'
            },
            {
                type: 'Shapes.Text',
                x: 1019.14,
                y: 696.336,
                name: 'Лихоборы'
            }
        ],
        stationName: 'Верхние Лихоборы'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1315,
            y: 701,
            width: 121,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1321.8,
                y: 720.336,
                name: 'Владыкино'
            }
        ],
        stationName: 'Владыкино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1147,
            y: 337,
            width: 93,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1152.22,
                y: 356.336,
                name: 'Водники'
            }
        ],
        stationName: 'Водники'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 903,
            y: 791,
            width: 174,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 912.775,
                y: 810.336,
                name: 'Водный стадион'
            }
        ],
        stationName: 'Водный стадион'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 825,
            y: 880,
            width: 130,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 832.303,
                y: 899.336,
                name: 'Войковская'
            }
        ],
        stationName: 'Войковская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1950,
            y: 1655,
            width: 160,
            height: 48,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1960.17,
                y: 1674.34,
                name: 'Волгоградский'
            },
            {
                type: 'Shapes.Text',
                x: 2014.78,
                y: 1697.34,
                name: 'проспект'
            }
        ],
        stationName: 'Волгоградский проспект'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2194,
            y: 1917,
            width: 107,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2200.01,
                y: 1936.34,
                name: 'Волжская'
            }
        ],
        stationName: 'Волжская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 384,
            y: 929,
            width: 168,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 393.438,
                y: 948.336,
                name: 'Волоколамская'
            }
        ],
        stationName: 'Волоколамская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1090,
            y: 1850,
            width: 175,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1099.83,
                y: 1869.34,
                name: 'Воробьёвы горы'
            }
        ],
        stationName: 'Воробьёвы горы'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 986,
            y: 1451,
            width: 143,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 994.034,
                y: 1470.34,
                name: 'Выставочная'
            }
        ],
        stationName: 'Выставочная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2372,
            y: 1795,
            width: 84,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2376.72,
                y: 1814.34,
                name: 'Выхино'
            }
        ],
        stationName: 'Выхино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 772,
            y: 1983,
            width: 100,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 777.618,
                y: 2002.34,
                name: 'Говорово'
            }
        ],
        stationName: 'Говорово'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1148,
            y: 928,
            width: 140,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1155.87,
                y: 947.336,
                name: 'Гражданская'
            }
        ],
        stationName: 'Гражданская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1135,
            y: 636,
            width: 101,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1140.67,
                y: 655.336,
                name: 'Дегунино'
            }
        ],
        stationName: 'Дегунино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 731,
            y: 1400,
            width: 160,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 739.989,
                y: 1419.34,
                name: 'Деловой центр'
            }
        ],
        stationName: 'Деловой центр'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 986,
            y: 1421,
            width: 159,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 994.933,
                y: 1440.34,
                name: 'Деловой центр'
            }
        ],
        stationName: 'Деловой центр'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2059,
            y: 1988,
            width: 57,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2062.2,
                y: 2007.34,
                name: 'Депо'
            }
        ],
        stationName: 'Депо'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1155,
            y: 1069,
            width: 85,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1159.78,
                y: 1088.34,
                name: 'Динамо'
            }
        ],
        stationName: 'Динамо'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1315,
            y: 927,
            width: 144,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1323.09,
                y: 946.336,
                name: 'Дмитровская'
            }
        ],
        stationName: 'Дмитровская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1594,
            y: 1780,
            width: 159,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1602.93,
                y: 1799.34,
                name: 'Добрынинская'
            }
        ],
        stationName: 'Добрынинская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1089,
            y: 389,
            width: 151,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1097.48,
                y: 408.336,
                name: 'Долгопрудная'
            }
        ],
        stationName: 'Долгопрудная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2025,
            y: 2330,
            width: 172,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2034.66,
                y: 2349.34,
                name: 'Домодедовская'
            }
        ],
        stationName: 'Домодедовская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1431,
            y: 1016,
            width: 140,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1438.87,
                y: 1035.34,
                name: 'Достоевская'
            }
        ],
        stationName: 'Достоевская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1832,
            y: 1708,
            width: 102,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1837.73,
                y: 1727.34,
                name: 'Дубровка'
            }
        ],
        stationName: 'Дубровка'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2398,
            y: 1948,
            width: 106,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2403.96,
                y: 1967.34,
                name: 'Жулебино'
            }
        ],
        stationName: 'Жулебино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1807,
            y: 1863,
            width: 48,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1809.7,
                y: 1882.34,
                name: 'ЗИЛ'
            }
        ],
        stationName: 'ЗИЛ'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 920,
            y: 1122,
            width: 64,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 923.596,
                y: 1141.34,
                name: 'Зорге'
            }
        ],
        stationName: 'Зорге'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2230,
            y: 2283,
            width: 116,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2236.52,
                y: 2302.34,
                name: 'Зябликово'
            }
        ],
        stationName: 'Зябликово'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1957,
            y: 1139,
            width: 121,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1963.8,
                y: 1158.34,
                name: 'Измайлово'
            }
        ],
        stationName: 'Измайлово'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2209,
            y: 1077,
            width: 155,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2217.71,
                y: 1096.34,
                name: 'Измайловская'
            }
        ],
        stationName: 'Измайловская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1792,
            y: 1125,
            width: 149,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1800.37,
                y: 1144.34,
                name: 'Каланчёвская'
            }
        ],
        stationName: 'Каланчёвская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2050,
            y: 1534,
            width: 116,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2056.52,
                y: 1553.34,
                name: 'Калитники'
            }
        ],
        stationName: 'Калитники'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1328,
            y: 2083,
            width: 116,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1334.52,
                y: 2102.34,
                name: 'Калужская'
            }
        ],
        stationName: 'Калужская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1730,
            y: 2149,
            width: 177,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1739.94,
                y: 2168.34,
                name: 'Кантемировская'
            }
        ],
        stationName: 'Кантемировская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1678,
            y: 2109,
            width: 115,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1684.46,
                y: 2128.34,
                name: 'Каховская'
            }
        ],
        stationName: 'Каховская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1905,
            y: 2029,
            width: 120,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1911.74,
                y: 2048.34,
                name: 'Каширская'
            }
        ],
        stationName: 'Каширская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1007,
            y: 1509,
            width: 102,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1012.73,
                y: 1528.34,
                name: 'Киевская'
            }
        ],
        stationName: 'Киевская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1679,
            y: 1412,
            width: 132,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1686.42,
                y: 1431.34,
                name: 'Китай-город'
            }
        ],
        stationName: 'Китай-город'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2037,
            y: 1759,
            width: 141,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2044.92,
                y: 1778.34,
                name: 'Кожуховская'
            }
        ],
        stationName: 'Кожуховская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1905,
            y: 1947,
            width: 143,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1913.03,
                y: 1966.34,
                name: 'Коломенская'
            }
        ],
        stationName: 'Коломенская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1233,
            y: 2493,
            width: 134,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1240.53,
                y: 2512.34,
                name: 'Коммунарка'
            }
        ],
        stationName: 'Коммунарка'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1775,
            y: 1171,
            width: 171,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1784.61,
                y: 1190.34,
                name: 'Комсомольская'
            }
        ],
        stationName: 'Комсомольская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1328,
            y: 2183,
            width: 102,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1333.73,
                y: 2202.34,
                name: 'Коньково'
            }
        ],
        stationName: 'Коньково'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1084,
            y: 850,
            width: 88,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1088.94,
                y: 869.336,
                name: 'Коптево'
            }
        ],
        stationName: 'Коптево'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2398,
            y: 1889,
            width: 79,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2402.44,
                y: 1908.34,
                name: 'Косино'
            }
        ],
        stationName: 'Косино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2398,
            y: 2015,
            width: 127,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2405.13,
                y: 2034.34,
                name: 'Котельники'
            }
        ],
        stationName: 'Котельники'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2203,
            y: 2340,
            width: 209,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2214.74,
                y: 2359.34,
                name: 'Красногвардейская'
            }
        ],
        stationName: 'Красногвардейская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 235,
            y: 739,
            width: 159,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 243.933,
                y: 758.336,
                name: 'Красногорская'
            }
        ],
        stationName: 'Красногорская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1102,
            y: 1362,
            width: 211,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1113.85,
                y: 1381.34,
                name: 'Краснопресненская'
            }
        ],
        stationName: 'Краснопресненская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1853,
            y: 1091,
            width: 176,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1862.89,
                y: 1110.34,
                name: 'Красносельская'
            }
        ],
        stationName: 'Красносельская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1713,
            y: 1221,
            width: 172,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1722.66,
                y: 1240.34,
                name: 'Красные Ворота'
            }
        ],
        stationName: 'Красные Ворота'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1048,
            y: 907,
            width: 97,
            height: 46,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1053.45,
                y: 925.336,
                name: 'Красный'
            },
            {
                type: 'Shapes.Text',
                x: 1053.45,
                y: 948.336,
                name: 'Балтиец'
            }
        ],
        stationName: 'Красный Балтиец'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1907,
            y: 2358,
            width: 126,
            height: 43,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1914.08,
                y: 2374.84,
                name: 'Красный'
            },
            {
                type: 'Shapes.Text',
                x: 1914.08,
                y: 2397.84,
                name: 'Строитель'
            }
        ],
        stationName: 'Красный Строитель'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1916,
            y: 1564,
            width: 148,
            height: 41,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1924.31,
                y: 1579.84,
                name: 'Крестьянская'
            },
            {
                type: 'Shapes.Text',
                x: 1924.31,
                y: 1602.84,
                name: 'Застава'
            }
        ],
        stationName: 'Крестьянская Застава'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1319,
            y: 1621,
            width: 161,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1328.04,
                y: 1640.34,
                name: 'Кропоткинская'
            }
        ],
        stationName: 'Кропоткинская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 592,
            y: 1164,
            width: 127,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 599.135,
                y: 1183.34,
                name: 'Крылатское'
            }
        ],
        stationName: 'Крылатское'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1519,
            y: 1951,
            width: 111,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1525.24,
                y: 1970.34,
                name: 'Крымская'
            }
        ],
        stationName: 'Крымская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2006,
            y: 1917,
            width: 110,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2012.18,
                y: 1936.34,
                name: 'Кубанская'
            }
        ],
        stationName: 'Кубанская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1423,
            y: 1312,
            width: 172,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1432.66,
                y: 1331.34,
                name: 'Кузнецкий Мост'
            }
        ],
        stationName: 'Кузнецкий Мост'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2122,
            y: 1706,
            width: 117,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2128.57,
                y: 1725.34,
                name: 'Кузьминки'
            }
        ],
        stationName: 'Кузьминки'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 589,
            y: 1324,
            width: 125,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 596.022,
                y: 1343.34,
                name: 'Кунцевская'
            }
        ],
        stationName: 'Кунцевская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1879,
            y: 1353,
            width: 90,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1884.06,
                y: 1372.34,
                name: 'Курская'
            }
        ],
        stationName: 'Курская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 940,
            y: 1606,
            width: 132,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 947.416,
                y: 1625.34,
                name: 'Кутузовская'
            }
        ],
        stationName: 'Кутузовская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1333,
            y: 1869,
            width: 221,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1345.42,
                y: 1888.34,
                name: 'Ленинский проспект'
            }
        ],
        stationName: 'Ленинский проспект'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2398,
            y: 1834,
            width: 170,
            height: 42,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2407.55,
                y: 1850.34,
                name: 'Лермонтовский'
            },
            {
                type: 'Shapes.Text',
                x: 2407.55,
                y: 1873.34,
                name: 'проспект'
            }
        ],
        stationName: 'Лермонтовский проспект'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1473,
            y: 2349,
            width: 155,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1481.71,
                y: 2368.34,
                name: 'Лесопарковая'
            }
        ],
        stationName: 'Лесопарковая'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2008,
            y: 1347,
            width: 118,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2014.63,
                y: 1366.34,
                name: 'Лефортово'
            }
        ],
        stationName: 'Лефортово'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1118,
            y: 536,
            width: 118,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1124.63,
                y: 555.336,
                name: 'Лианозово'
            }
        ],
        stationName: 'Лианозово'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1148,
            y: 808,
            width: 107,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1154.01,
                y: 827.336,
                name: 'Лихоборы'
            }
        ],
        stationName: 'Лихоборы'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1172,
            y: 185,
            width: 68,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1175.82,
                y: 204.336,
                name: 'Лобня'
            }
        ],
        stationName: 'Лобня'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1993,
            y: 903,
            width: 120,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1999.74,
                y: 922.336,
                name: 'Локомотив'
            }
        ],
        stationName: 'Локомотив'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 772,
            y: 1773,
            width: 172,
            height: 46,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 781.663,
                y: 1791.34,
                name: 'Ломоносовский'
            },
            {
                type: 'Shapes.Text',
                x: 781.663,
                y: 1814.34,
                name: 'проспект'
            }
        ],
        stationName: 'Ломоносовский проспект'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1594,
            y: 1351,
            width: 91,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1599.11,
                y: 1370.34,
                name: 'Лубянка'
            }
        ],
        stationName: 'Лубянка'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1154,
            y: 1820,
            width: 96,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1159.39,
                y: 1839.34,
                name: 'Лужники'
            }
        ],
        stationName: 'Лужники'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2578,
            y: 1965,
            width: 153,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2586.6,
                y: 1984.34,
                name: 'Лухмановская'
            }
        ],
        stationName: 'Лухмановская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2230,
            y: 1986,
            width: 99,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2235.56,
                y: 2005.34,
                name: 'Люблино'
            }
        ],
        stationName: 'Люблино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1175,
            y: 489,
            width: 61,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1178.43,
                y: 508.336,
                name: 'Марк'
            }
        ],
        stationName: 'Марк'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1688,
            y: 1627,
            width: 150,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1696.43,
                y: 1646.34,
                name: 'Марксистская'
            }
        ],
        stationName: 'Марксистская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1517,
            y: 979,
            width: 157,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1525.82,
                y: 998.336,
                name: 'Марьина Роща'
            }
        ],
        stationName: 'Марьина Роща'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2230,
            y: 2107,
            width: 99,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2235.56,
                y: 2126.34,
                name: 'Марьино'
            }
        ],
        stationName: 'Марьино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1315,
            y: 1228,
            width: 129,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1322.25,
                y: 1247.34,
                name: 'Маяковская'
            }
        ],
        stationName: 'Маяковская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1689,
            y: 539,
            width: 133,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1696.47,
                y: 558.336,
                name: 'Медведково'
            }
        ],
        stationName: 'Медведково'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 729,
            y: 1342,
            width: 173,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 738.719,
                y: 1361.34,
                name: 'Международная'
            }
        ],
        stationName: 'Международная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1303,
            y: 1110,
            width: 167,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1312.38,
                y: 1129.34,
                name: 'Менделеевская'
            }
        ],
        stationName: 'Менделеевская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 769,
            y: 1710,
            width: 95,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 774.337,
                y: 1729.34,
                name: 'Минская'
            }
        ],
        stationName: 'Минская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 471,
            y: 834,
            width: 84,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 475.719,
                y: 853.336,
                name: 'Митино'
            }
        ],
        stationName: 'Митино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 772,
            y: 1883,
            width: 242,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 785.596,
                y: 1902.34,
                name: 'Мичуринскийпроспект'
            }
        ],
        stationName: 'Мичуринскийпроспект'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 592,
            y: 1234,
            width: 139,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 599.809,
                y: 1253.34,
                name: 'Молодёжная'
            }
        ],
        stationName: 'Молодёжная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1774,
            y: 1457,
            width: 188,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1784.56,
                y: 1476.34,
                name: 'Москва-Товарная'
            }
        ],
        stationName: 'Москва-Товарная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1971,
            y: 2166,
            width: 143,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1979.03,
                y: 2185.34,
                name: 'Москворечье'
            }
        ],
        stationName: 'Москворечье'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 592,
            y: 1024,
            width: 109,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 598.124,
                y: 1043.34,
                name: 'Мякинино'
            }
        ],
        stationName: 'Мякинино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1683,
            y: 1927,
            width: 135,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1690.58,
                y: 1946.34,
                name: 'Нагатинская'
            }
        ],
        stationName: 'Нагатинская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1683,
            y: 1984,
            width: 103,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1688.79,
                y: 2003.34,
                name: 'Нагорная'
            }
        ],
        stationName: 'Нагорная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 292,
            y: 583,
            width: 102,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 297.73,
                y: 602.336,
                name: 'Нахабино'
            }
        ],
        stationName: 'Нахабино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1503,
            y: 2022,
            width: 145,
            height: 45,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1512.85,
                y: 2039.84,
                name: 'Нахимовский'
            },
            {
                type: 'Shapes.Text',
                x: 1554.28,
                y: 2062.84,
                name: 'проспект'
            }
        ],
        stationName: 'Нахимовский проспект'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2578,
            y: 2021,
            width: 127,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2585.13,
                y: 2040.34,
                name: 'Некрасовка'
            }
        ],
        stationName: 'Некрасовка'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 266,
            y: 1222,
            width: 132,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 273.416,
                y: 1241.34,
                name: 'Немчиновка'
            }
        ],
        stationName: 'Немчиновка'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2111,
            y: 1466,
            width: 165,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2120.27,
                y: 1485.34,
                name: 'Нижегородская'
            }
        ],
        stationName: 'Нижегородская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2300,
            y: 1343,
            width: 138,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2307.75,
                y: 1362.34,
                name: 'Новогиреево'
            }
        ],
        stationName: 'Новогиреево'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1111,
            y: 437,
            width: 129,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1118.25,
                y: 456.336,
                name: 'Новодачная'
            }
        ],
        stationName: 'Новодачная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2391,
            y: 1285,
            width: 130,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2398.3,
                y: 1304.34,
                name: 'Новокосино'
            }
        ],
        stationName: 'Новокосино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1610,
            y: 1542,
            width: 162,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1619.1,
                y: 1561.34,
                name: 'Новокузнецкая'
            }
        ],
        stationName: 'Новокузнецкая'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 772,
            y: 2133,
            width: 193,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 782.843,
                y: 2152.34,
                name: 'Новопеределкино'
            }
        ],
        stationName: 'Новопеределкино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1305,
            y: 1048,
            width: 177,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1314.94,
                y: 1067.34,
                name: 'Новослободская'
            }
        ],
        stationName: 'Новослободская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2106,
            y: 1583,
            width: 176,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2115.89,
                y: 1602.34,
                name: 'Новохохловская'
            }
        ],
        stationName: 'Новохохловская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1427,
            y: 2301,
            width: 177,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1436.94,
                y: 2320.34,
                name: 'Новоясеневская'
            }
        ],
        stationName: 'Новоясеневская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1328,
            y: 2022,
            width: 123,
            height: 48,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1334.91,
                y: 2041.34,
                name: 'Новые'
            },
            {
                type: 'Shapes.Text',
                x: 1334.91,
                y: 2064.34,
                name: 'Черёмушки'
            }
        ],
        stationName: 'Новые Черёмушки'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 292,
            y: 1070,
            width: 106,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 297.955,
                y: 1089.34,
                name: 'Одинцово'
            }
        ],
        stationName: 'Одинцово'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 772,
            y: 1933,
            width: 89,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 777,
                y: 1952.34,
                name: 'Озёрная'
            }
        ],
        stationName: 'Озёрная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1113,
            y: 748,
            width: 107,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1119.01,
                y: 767.336,
                name: 'Окружная'
            }
        ],
        stationName: 'Окружная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2278,
            y: 1684,
            width: 79,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2282.44,
                y: 1703.34,
                name: 'Окская'
            }
        ],
        stationName: 'Окская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1421,
            y: 1775,
            width: 140,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1428.87,
                y: 1794.34,
                name: 'Октябрьская'
            }
        ],
        stationName: 'Октябрьская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 732,
            y: 1079,
            width: 136,
            height: 46,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 740.469,
                y: 1097.34,
                name: 'Октябрьское'
            },
            {
                type: 'Shapes.Text',
                x: 813.945,
                y: 1120.34,
                name: 'Поле'
            }
        ],
        stationName: 'Октябрьское Поле'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1187,
            y: 2443,
            width: 102,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1192.73,
                y: 2462.34,
                name: 'Ольховая'
            }
        ],
        stationName: 'Ольховая'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 303,
            y: 687,
            width: 91,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 308.112,
                y: 706.336,
                name: 'Опалиха'
            }
        ],
        stationName: 'Опалиха'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2057,
            y: 2255,
            width: 92,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2062.17,
                y: 2274.34,
                name: 'Орехово'
            }
        ],
        stationName: 'Орехово'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1907,
            y: 2607,
            width: 116,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1913.52,
                y: 2626.34,
                name: 'Остафьево'
            }
        ],
        stationName: 'Остафьево'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1315,
            y: 633,
            width: 102,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1320.73,
                y: 652.336,
                name: 'Отрадное'
            }
        ],
        stationName: 'Отрадное'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1517,
            y: 1412,
            width: 138,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1524.75,
                y: 1431.34,
                name: 'Охотный Ряд'
            }
        ],
        stationName: 'Охотный Ряд'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1608,
            y: 1697,
            width: 127,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1615.13,
                y: 1716.34,
                name: 'Павелецкая'
            }
        ],
        stationName: 'Павелецкая'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 296,
            y: 788,
            width: 98,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 301.506,
                y: 807.336,
                name: 'Павшино'
            }
        ],
        stationName: 'Павшино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 938,
            y: 1058,
            width: 157,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 946.82,
                y: 1077.34,
                name: 'Панфиловская'
            }
        ],
        stationName: 'Панфиловская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 653,
            y: 1632,
            width: 142,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 660.978,
                y: 1651.34,
                name: 'Парк Победы'
            }
        ],
        stationName: 'Парк Победы'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1265,
            y: 1675,
            width: 159,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1273.93,
                y: 1694.34,
                name: 'Парк культуры'
            }
        ],
        stationName: 'Парк культуры'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2150,
            y: 1138,
            width: 150,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2158.43,
                y: 1157.34,
                name: 'Партизанская'
            }
        ],
        stationName: 'Партизанская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 292,
            y: 838,
            width: 102,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 297.73,
                y: 857.336,
                name: 'Пенягино'
            }
        ],
        stationName: 'Пенягино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2248,
            y: 993,
            width: 158,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2256.88,
                y: 1012.34,
                name: 'Первомайская'
            }
        ],
        stationName: 'Первомайская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2021,
            y: 2052,
            width: 93,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2026.22,
                y: 2071.34,
                name: 'Перерва'
            }
        ],
        stationName: 'Перерва'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2220,
            y: 1285,
            width: 80,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2224.49,
                y: 1304.34,
                name: 'Перово'
            }
        ],
        stationName: 'Перово'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1037,
            y: 1135,
            width: 129,
            height: 44,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1047.41,
                y: 1152.34,
                name: 'Петровский'
            },
            {
                type: 'Shapes.Text',
                x: 1115.75,
                y: 1175.34,
                name: 'парк'
            }
        ],
        stationName: 'Петровский парк'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1315,
            y: 763,
            width: 257,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1329.44,
                y: 782.336,
                name: 'Петровско-Разумовская'
            }
        ],
        stationName: 'Петровско-Разумовская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2114,
            y: 1842,
            width: 113,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2120.35,
                y: 1861.34,
                name: 'Печатники'
            }
        ],
        stationName: 'Печатники'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 512,
            y: 1420,
            width: 129,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 519.247,
                y: 1439.34,
                name: 'Пионерская'
            }
        ],
        stationName: 'Пионерская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 709,
            y: 753,
            width: 116,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 715.517,
                y: 772.336,
                name: 'Планерная'
            }
        ],
        stationName: 'Планерная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1333,
            y: 1903,
            width: 197,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1344.07,
                y: 1922.34,
                name: 'Площадь Гагарина'
            }
        ],
        stationName: 'Площадь Гагарина'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1965,
            y: 1500,
            width: 182,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1975.22,
                y: 1519.34,
                name: 'Площадь Ильича'
            }
        ],
        stationName: 'Площадь Ильича'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1517,
            y: 1470,
            width: 224,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1529.58,
                y: 1489.34,
                name: 'Площадь Революции'
            }
        ],
        stationName: 'Площадь Революции'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1907,
            y: 2724,
            width: 108,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1913.07,
                y: 2743.34,
                name: 'Подольск'
            }
        ],
        stationName: 'Подольск'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 807,
            y: 907,
            width: 121,
            height: 46,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 813.798,
                y: 925.336,
                name: 'Покровско-'
            },
            {
                type: 'Shapes.Text',
                x: 813.798,
                y: 948.336,
                name: 'Стрешнево'
            }
        ],
        stationName: 'Покровско-Стрешнево'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1907,
            y: 2303,
            width: 128,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1914.19,
                y: 2322.34,
                name: 'Покровское'
            }
        ],
        stationName: 'Покровское'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 944,
            y: 1184,
            width: 155,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 952.708,
                y: 1203.34,
                name: 'Полежаевская'
            }
        ],
        stationName: 'Полежаевская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1512,
            y: 1684,
            width: 94,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1517.28,
                y: 1703.34,
                name: 'Полянка'
            }
        ],
        stationName: 'Полянка'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1541,
            y: 2233,
            width: 107,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1547.01,
                y: 2252.34,
                name: 'Пражская'
            }
        ],
        stationName: 'Пражская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1945,
            y: 979,
            width: 181,
            height: 52,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1955.17,
                y: 1000.34,
                name: 'Преображенская'
            },
            {
                type: 'Shapes.Text',
                x: 1955.17,
                y: 1023.34,
                name: 'площадь'
            }
        ],
        stationName: 'Преображенская площадь'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1136,
            y: 2391,
            width: 111,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1142.24,
                y: 2410.34,
                name: 'Прокшино'
            }
        ],
        stationName: 'Прокшино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1789,
            y: 1654,
            width: 150,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1797.43,
                y: 1673.34,
                name: 'Пролетарская'
            }
        ],
        stationName: 'Пролетарская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1059,
            y: 2002,
            width: 241,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1072.54,
                y: 2021.34,
                name: 'Проспект Вернадского'
            }
        ],
        stationName: 'Проспект Вернадского'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1486,
            y: 1107,
            width: 165,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1495.27,
                y: 1126.34,
                name: 'Проспект Мира'
            }
        ],
        stationName: 'Проспект Мира'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1328,
            y: 1985,
            width: 149,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1336.37,
                y: 2004.34,
                name: 'Профсоюзная'
            }
        ],
        stationName: 'Профсоюзная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1348,
            y: 1358,
            width: 131,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1355.36,
                y: 1377.34,
                name: 'Пушкинская'
            }
        ],
        stationName: 'Пушкинская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 441,
            y: 746,
            width: 114,
            height: 45,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 447.474,
                y: 763.836,
                name: 'Пятницкое'
            },
            {
                type: 'Shapes.Text',
                x: 490.755,
                y: 786.836,
                name: 'шоссе'
            }
        ],
        stationName: 'Пятницкое шоссе'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 294,
            y: 1333,
            width: 186,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 304.449,
                y: 1352.34,
                name: 'Рабочий Посёлок'
            }
        ],
        stationName: 'Рабочий Посёлок'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 772,
            y: 1833,
            width: 95,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 777.337,
                y: 1852.34,
                name: 'Раменки'
            }
        ],
        stationName: 'Раменки'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 772,
            y: 2180,
            width: 137,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 779.697,
                y: 2199.34,
                name: 'Рассказовка'
            }
        ],
        stationName: 'Рассказовка'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 903,
            y: 746,
            width: 156,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 911.764,
                y: 765.336,
                name: 'Речной вокзал'
            }
        ],
        stationName: 'Речной вокзал'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1689,
            y: 1010,
            width: 96,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1694.39,
                y: 1029.34,
                name: 'Рижская'
            }
        ],
        stationName: 'Рижская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1824,
            y: 1494,
            width: 92,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1829.17,
                y: 1513.34,
                name: 'Римская'
            }
        ],
        stationName: 'Римская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1785,
            y: 730,
            width: 112,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1791.29,
                y: 749.336,
                name: 'Ростокино'
            }
        ],
        stationName: 'Ростокино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1059,
            y: 2212,
            width: 117,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1065.57,
                y: 2231.34,
                name: 'Румянцево'
            }
        ],
        stationName: 'Румянцево'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2317,
            y: 1747,
            width: 215,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2329.08,
                y: 1766.34,
                name: 'Рязанский проспект'
            }
        ],
        stationName: 'Рязанский проспект'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1322,
            y: 980,
            width: 140,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1329.87,
                y: 999.336,
                name: 'Савёловская'
            }
        ],
        stationName: 'Савёловская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1059,
            y: 2281,
            width: 117,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1065.57,
                y: 2300.34,
                name: 'Саларьево'
            }
        ],
        stationName: 'Саларьево'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1689,
            y: 633,
            width: 104,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1694.84,
                y: 652.336,
                name: 'Свиблово'
            }
        ],
        stationName: 'Свиблово'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1464,
            y: 2083,
            width: 184,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1474.34,
                y: 2102.34,
                name: 'Севастопольская'
            }
        ],
        stationName: 'Севастопольская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 925,
            y: 566,
            width: 134,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 932.528,
                y: 585.336,
                name: 'Селигерская'
            }
        ],
        stationName: 'Селигерская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1922,
            y: 1200,
            width: 142,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1929.98,
                y: 1219.34,
                name: 'Семёновская'
            }
        ],
        stationName: 'Семёновская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1573,
            y: 1745,
            width: 148,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1581.31,
                y: 1764.34,
                name: 'Серпуховская'
            }
        ],
        stationName: 'Серпуховская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 353,
            y: 1281,
            width: 76,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 357.27,
                y: 1300.34,
                name: 'Сетунь'
            }
        ],
        stationName: 'Сетунь'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1907,
            y: 2668,
            width: 128,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1914.19,
                y: 2687.34,
                name: 'Силикатная'
            }
        ],
        stationName: 'Силикатная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 294,
            y: 1172,
            width: 104,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 299.843,
                y: 1191.34,
                name: 'Сколково'
            }
        ],
        stationName: 'Сколково'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 383,
            y: 1473,
            width: 218,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 395.247,
                y: 1492.34,
                name: 'Славянский бульвар'
            }
        ],
        stationName: 'Славянский бульвар'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1149,
            y: 1546,
            width: 132,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1156.42,
                y: 1565.34,
                name: 'Смоленская'
            }
        ],
        stationName: 'Смоленская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1163,
            y: 1441,
            width: 130,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1170.3,
                y: 1460.34,
                name: 'Смоленская'
            }
        ],
        stationName: 'Смоленская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1078,
            y: 989,
            width: 70,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1081.93,
                y: 1008.34,
                name: 'Сокол'
            }
        ],
        stationName: 'Сокол'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2126,
            y: 1233,
            width: 167,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2135.38,
                y: 1252.34,
                name: 'Соколиная гора'
            }
        ],
        stationName: 'Соколиная гора'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1896,
            y: 1046,
            width: 139,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1903.81,
                y: 1065.34,
                name: 'Сокольники'
            }
        ],
        stationName: 'Сокольники'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 772,
            y: 2033,
            width: 104,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 777.843,
                y: 2052.34,
                name: 'Солнцево'
            }
        ],
        stationName: 'Солнцево'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 713,
            y: 997,
            width: 91,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 718.112,
                y: 1016.34,
                name: 'Спартак'
            }
        ],
        stationName: 'Спартак'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1154,
            y: 1790,
            width: 127,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1161.13,
                y: 1809.34,
                name: 'Спортивная'
            }
        ],
        stationName: 'Спортивная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1629,
            y: 1322,
            width: 216,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1641.13,
                y: 1341.34,
                name: 'Сретенский бульвар'
            }
        ],
        stationName: 'Сретенский бульвар'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2194,
            y: 1550,
            width: 147,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2202.26,
                y: 1569.34,
                name: 'Стахановская'
            }
        ],
        stationName: 'Стахановская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 913,
            y: 998,
            width: 119,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 919.686,
                y: 1017.34,
                name: 'Стрешнево'
            }
        ],
        stationName: 'Стрешнево'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 592,
            y: 1094,
            width: 100,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 597.618,
                y: 1113.34,
                name: 'Строгино'
            }
        ],
        stationName: 'Строгино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 850,
            y: 1512,
            width: 147,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 858.258,
                y: 1531.34,
                name: 'Студенческая'
            }
        ],
        stationName: 'Студенческая'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1519,
            y: 1195,
            width: 136,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1526.64,
                y: 1214.34,
                name: 'Сухаревская'
            }
        ],
        stationName: 'Сухаревская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 709,
            y: 834,
            width: 138,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 716.753,
                y: 853.336,
                name: 'Сходненская'
            }
        ],
        stationName: 'Сходненская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1807,
            y: 1554,
            width: 109,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1813.12,
                y: 1573.34,
                name: 'Таганская'
            }
        ],
        stationName: 'Таганская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1370,
            y: 1288,
            width: 100,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1375.62,
                y: 1307.34,
                name: 'Тверская'
            }
        ],
        stationName: 'Тверская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1517,
            y: 1441,
            width: 134,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1524.53,
                y: 1460.34,
                name: 'Театральная'
            }
        ],
        stationName: 'Театральная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2145,
            y: 1653,
            width: 155,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2153.71,
                y: 1672.34,
                name: 'Текстильщики'
            }
        ],
        stationName: 'Текстильщики'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 979,
            y: 1387,
            width: 121,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 985.798,
                y: 1406.34,
                name: 'Тестовская'
            }
        ],
        stationName: 'Тестовская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1905,
            y: 1849,
            width: 116,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1911.52,
                y: 1868.34,
                name: 'Технопарк'
            }
        ],
        stationName: 'Технопарк'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1315,
            y: 861,
            width: 163,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1324.16,
                y: 880.336,
                name: 'Тимирязевская'
            }
        ],
        stationName: 'Тимирязевская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1482,
            y: 1612,
            width: 157,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1490.82,
                y: 1631.34,
                name: 'Третьяковская'
            }
        ],
        stationName: 'Третьяковская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 583,
            y: 975,
            width: 140,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 590.865,
                y: 994.336,
                name: 'Трикотажная'
            }
        ],
        stationName: 'Трикотажная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1059,
            y: 2142,
            width: 113,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1065.35,
                y: 2161.34,
                name: 'Тропарёво'
            }
        ],
        stationName: 'Тропарёво'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1514,
            y: 1156,
            width: 87,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1518.89,
                y: 1175.34,
                name: 'Трубная'
            }
        ],
        stationName: 'Трубная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1536,
            y: 1840,
            width: 96,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1541.39,
                y: 1859.34,
                name: 'Тульская'
            }
        ],
        stationName: 'Тульская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1679,
            y: 1275,
            width: 142,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1686.98,
                y: 1294.34,
                name: 'Тургеневская'
            }
        ],
        stationName: 'Тургеневская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 623,
            y: 929,
            width: 117,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 629.573,
                y: 948.336,
                name: 'Тушинская'
            }
        ],
        stationName: 'Тушинская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1352,
            y: 2230,
            width: 138,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1359.75,
                y: 2249.34,
                name: 'Тёплый Стан'
            }
        ],
        stationName: 'Тёплый Стан'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1985,
            y: 1709,
            width: 117,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1991.57,
                y: 1728.34,
                name: 'Угрешская'
            }
        ],
        stationName: 'Угрешская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 958,
            y: 1326,
            width: 105,
            height: 46,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1000.16,
                y: 1344.34,
                name: 'Улица'
            },
            {
                type: 'Shapes.Text',
                x: 966.161,
                y: 1367.34,
                name: '1905 года'
            }
        ],
        stationName: 'Улица 1905 года'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1680,
            y: 2272,
            width: 197,
            height: 48,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1691.07,
                y: 2291.34,
                name: 'Улица'
            },
            {
                type: 'Shapes.Text',
                x: 1691.07,
                y: 2314.34,
                name: 'Академика Янгеля'
            }
        ],
        stationName: 'Улица Академика Янгеля'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1517,
            y: 2586,
            width: 111,
            height: 46,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1565.28,
                y: 2604.34,
                name: 'Улица'
            },
            {
                type: 'Shapes.Text',
                x: 1525.02,
                y: 2627.34,
                name: 'Горчакова'
            }
        ],
        stationName: 'Улица Горчакова'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2578,
            y: 1897,
            width: 165,
            height: 50,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2587.27,
                y: 1917.34,
                name: 'Улица'
            },
            {
                type: 'Shapes.Text',
                x: 2587.27,
                y: 1940.34,
                name: 'Дмитриевского'
            }
        ],
        stationName: 'Улица Дмитриевского'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1473,
            y: 2448,
            width: 155,
            height: 46,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1563.3,
                y: 2466.34,
                name: 'Улица'
            },
            {
                type: 'Shapes.Text',
                x: 1487.64,
                y: 2489.34,
                name: 'Скобелевская'
            }
        ],
        stationName: 'Улица Скобелевская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1430,
            y: 2389,
            width: 198,
            height: 46,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1561.37,
                y: 2407.34,
                name: 'Улица'
            },
            {
                type: 'Shapes.Text',
                x: 1442.15,
                y: 2430.34,
                name: 'Старокачаловская'
            }
        ],
        stationName: 'Улица Старокачаловская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1060,
            y: 1932,
            width: 133,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1067.47,
                y: 1951.34,
                name: 'Университет'
            }
        ],
        stationName: 'Университет'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1088,
            y: 2341,
            width: 133,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1095.47,
                y: 2360.34,
                name: 'Филатов Луг'
            }
        ],
        stationName: 'Филатов Луг'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 821,
            y: 1546,
            width: 61,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 824.427,
                y: 1565.34,
                name: 'Фили'
            }
        ],
        stationName: 'Фили'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 716,
            y: 1446,
            width: 173,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 725.719,
                y: 1465.34,
                name: 'Филёвский парк'
            }
        ],
        stationName: 'Филёвский парк'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1429,
            y: 829,
            width: 156,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1437.76,
                y: 848.336,
                name: 'Фонвизинская'
            }
        ],
        stationName: 'Фонвизинская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1203,
            y: 1733,
            width: 139,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1210.81,
                y: 1752.34,
                name: 'Фрунзенская'
            }
        ],
        stationName: 'Фрунзенская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1111,
            y: 287,
            width: 129,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1118.25,
                y: 306.336,
                name: 'Хлебниково'
            }
        ],
        stationName: 'Хлебниково'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 903,
            y: 656,
            width: 93,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 908.225,
                y: 675.336,
                name: 'Ховрино'
            }
        ],
        stationName: 'Ховрино'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 763,
            y: 1181,
            width: 107,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 769.011,
                y: 1200.34,
                name: 'Хорошёво'
            }
        ],
        stationName: 'Хорошёво'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 947,
            y: 1214,
            width: 143,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 955.034,
                y: 1233.34,
                name: 'Хорошёвская'
            }
        ],
        stationName: 'Хорошёвская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 960,
            y: 1092,
            width: 62,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 963.483,
                y: 1111.34,
                name: 'ЦСКА'
            }
        ],
        stationName: 'ЦСКА'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1835,
            y: 2194,
            width: 111,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1841.24,
                y: 2213.34,
                name: 'Царицыно'
            }
        ],
        stationName: 'Царицыно'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1380,
            y: 1170,
            width: 91,
            height: 54,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1385.11,
                y: 1192.34,
                name: 'Цветной'
            },
            {
                type: 'Shapes.Text',
                x: 1385.11,
                y: 1215.34,
                name: 'бульвар'
            }
        ],
        stationName: 'Цветной бульвар'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1800,
            y: 945,
            width: 150,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1808.43,
                y: 964.336,
                name: 'Черкизовская'
            }
        ],
        stationName: 'Черкизовская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1495,
            y: 2133,
            width: 150,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1503.43,
                y: 2152.34,
                name: 'Чертановская'
            }
        ],
        stationName: 'Чертановская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1241,
            y: 1280,
            width: 112,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1247.29,
                y: 1299.34,
                name: 'Чеховская'
            }
        ],
        stationName: 'Чеховская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1479,
            y: 1269,
            width: 151,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1487.48,
                y: 1288.34,
                name: 'Чистые пруды'
            }
        ],
        stationName: 'Чистые пруды'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1717,
            y: 1383,
            width: 126,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1724.08,
                y: 1402.34,
                name: 'Чкаловская'
            }
        ],
        stationName: 'Чкаловская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1369,
            y: 1825,
            width: 148,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1377.31,
                y: 1844.34,
                name: 'Шаболовская'
            }
        ],
        stationName: 'Шаболовская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 898,
            y: 1274,
            width: 109,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 904.124,
                y: 1293.34,
                name: 'Шелепиха'
            }
        ],
        stationName: 'Шелепиха'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1059,
            y: 236,
            width: 181,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1069.17,
                y: 255.336,
                name: 'Шереметьевская'
            }
        ],
        stationName: 'Шереметьевская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2230,
            y: 2227,
            width: 146,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2238.2,
                y: 2246.34,
                name: 'Шипиловская'
            }
        ],
        stationName: 'Шипиловская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2143,
            y: 1343,
            width: 137,
            height: 46,
            rx: 14
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2150.7,
                y: 1361.34,
                name: 'Шоссе'
            },
            {
                type: 'Shapes.Text',
                x: 2150.7,
                y: 1384.34,
                name: 'Энтузиастов'
            }
        ],
        stationName: 'Шоссе Энтузиастов'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1907,
            y: 2547,
            width: 108,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1913.07,
                y: 2566.34,
                name: 'Щербинка'
            }
        ],
        stationName: 'Щербинка'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 725,
            y: 1038,
            width: 120,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 731.742,
                y: 1057.34,
                name: 'Щукинская'
            }
        ],
        stationName: 'Щукинская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2248,
            y: 914,
            width: 134,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2255.53,
                y: 933.336,
                name: 'Щёлковская'
            }
        ],
        stationName: 'Щёлковская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1803,
            y: 1249,
            width: 199,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1814.18,
                y: 1268.34,
                name: 'Электрозаводская'
            }
        ],
        stationName: 'Электрозаводская'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 2116,
            y: 1811,
            width: 160,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 2124.99,
                y: 1830.34,
                name: 'Юго-Восточная'
            }
        ],
        stationName: 'Юго-Восточная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1059,
            y: 2072,
            width: 150,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1067.43,
                y: 2091.34,
                name: 'Юго-Западная'
            }
        ],
        stationName: 'Юго-Западная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1572,
            y: 2183,
            width: 76,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1576.27,
                y: 2202.34,
                name: 'Южная'
            }
        ],
        stationName: 'Южная'
    },
    {
        bg: {
            type: 'Shapes.Rect',
            x: 1395,
            y: 2266,
            width: 92,
            height: 25,
            rx: 12.5
        },
        labels: [
            {
                type: 'Shapes.Rect',
                x: 1400.17,
                y: 2285.34,
                name: 'Ясенево'
            }
        ],
        stationName: 'Ясенево'
    }
]
const _stations = [
    {
        id: 0,
        labels: [
            {
                x: 2056,
                y: 1439.34,
                name: 'Авиамоторная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Авиамоторная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2024',
                cy: '1451',
                r: '5',
                fill: '#ffc61a'
            },
            {
                type: 'Shapes.Circle',
                cx: '2024',
                cy: '1416',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 1,
        labels: [
            {
                x: 1817,
                y: 1775.34,
                name: 'Автозаводская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Автозаводская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1847',
                cy: '1794',
                r: '5',
                fill: '#48b85e'
            },
            {
                type: 'Shapes.Circle',
                cx: '1887',
                cy: '1794',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 2,
        labels: [
            {
                x: 1328,
                y: 1959.34,
                name: 'Академическая',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Академическая',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1315',
                cy: '1949',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 3,
        labels: [
            {
                x: 1387,
                y: 1532.34,
                name: 'Александровский сад',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Александровский сад',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1371',
                cy: '1537',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 4,
        labels: [
            {
                x: 1689,
                y: 933.336,
                name: 'Алексеевская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Алексеевская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '926',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 5,
        labels: [
            {
                x: 2357,
                y: 2327.34,
                name: 'Алма-Атинская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Алма-Атинская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2340',
                cy: '2321',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 6,
        labels: [
            {
                x: 1321,
                y: 555.336,
                name: 'Алтуфьево',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Алтуфьево',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1298',
                cy: '545',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 7,
        labels: [
            {
                x: 2124,
                y: 1411.34,
                name: 'Андроновка',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Андроновка',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2111',
                cy: '1405',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 8,
        labels: [
            {
                x: 292,
                y: 656.336,
                name: 'Аникеевка',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Аникеевка',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '414',
                cy: '649',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 9,
        labels: [
            {
                x: 1689,
                y: 2356.34,
                name: 'Аннино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Аннино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '2346',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 10,
        labels: [
            {
                x: 1272,
                y: 1507.34,
                name: 'Арбатская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Арбатская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1285',
                cy: '1478',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 11,
        labels: [
            {
                x: 1243,
                y: 1530.34,
                name: 'Арбатская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Арбатская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1352',
                cy: '1537',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 12,
        labels: [
            {
                x: 1116,
                y: 1049.34,
                name: 'Аэропорт',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Аэропорт',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1099',
                cy: '1046',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 13,
        labels: [
            {
                x: 1689,
                y: 607.336,
                name: 'Бабушкинская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Бабушкинская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '597',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 14,
        labels: [
            {
                x: 582,
                y: 1540.34,
                name: 'Багратионовская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Багратионовская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '765',
                cy: '1530',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 15,
        labels: [
            {
                x: 319,
                y: 1139.34,
                name: 'Баковка',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Баковка',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '415',
                cy: '1135',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 16,
        labels: [
            {
                x: 1005,
                y: 896.336,
                name: 'Балтийская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Балтийская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1017',
                cy: '915',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 17,
        labels: [
            {
                x: 1166,
                y: 1322.34,
                name: 'Баррикадная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Баррикадная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1161',
                cy: '1345',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 18,
        labels: [
            {
                x: 1827,
                y: 1323.34,
                name: 'Бауманская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Бауманская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1955',
                cy: '1321',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 19,
        labels: [
            {
                x: 1034,
                y: 1279.34,
                name: 'Беговая',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Беговая',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1024',
                cy: '1291',
                r: '5',
                fill: '#8e479b'
            },
            {
                type: 'Shapes.Circle',
                cx: '1042',
                cy: '1308',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 20,
        labels: [
            {
                x: 1853,
                y: 785.336,
                name: 'Белокаменная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Белокаменная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1842',
                cy: '798',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 21,
        labels: [
            {
                x: 907,
                y: 722.336,
                name: 'Беломорская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Беломорская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '890',
                cy: '715',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 22,
        labels: [
            {
                x: 1240,
                y: 1166.34,
                name: 'Белорусская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Белорусская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1247',
                cy: '1194',
                r: '5',
                fill: '#48b85e'
            },
            {
                type: 'Shapes.Circle',
                cx: '1232',
                cy: '1179',
                r: '5',
                fill: '#894e35'
            },
            {
                type: 'Shapes.Circle',
                cx: '1217',
                cy: '1133',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 23,
        labels: [
            {
                x: 1327,
                y: 2154.34,
                name: 'Беляево',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Беляево',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1314',
                cy: '2146',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 24,
        labels: [
            {
                x: 1106,
                y: 605.336,
                name: 'Бескудниково',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Бескудниково',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1260',
                cy: '599',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 25,
        labels: [
            {
                x: 1321,
                y: 605.336,
                name: 'Бибирево',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Бибирево',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1298',
                cy: '595',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 26,
        labels: [
            {
                x: 1392,
                y: 1568.34,
                name: 'Библиотека',
                type:  'Shapes.Text'
            },
            {
                x: 1392,
                y: 1591.34,
                name: 'имени Ленина',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Библиотека имени Ленина',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1372,
                cy: 1558,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 27,
        labels: [
            {
                x: 1911,
                y: 2446.34,
                name: 'Битца',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Битца',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1891',
                cy: '2440',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 28,
        labels: [
            {
                x: 1269,
                y: 2366.34,
                name: 'Битцевский парк',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Битцевский парк',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1425',
                cy: '2337',
                r: '5',
                fill: '#acbfe3'
            }
        ]
    },
    {
        id: 29,
        labels: [
            {
                x: 2230,
                y: 2186.34,
                name: 'Борисово',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Борисово',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2216',
                cy: '2180',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 30,
        labels: [
            {
                x: 1240,
                y: 1584.34,
                name: 'Боровицкая',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Боровицкая',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1352',
                cy: '1558',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 31,
        labels: [
            {
                x: 769,
                y: 2100.21,
                name: 'Боровское шоссе',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Боровское шоссе',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '754',
                cy: '2096',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 32,
        labels: [
            {
                x: 1689,
                y: 697.336,
                name: 'Ботанический сад',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Ботанический сад',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '691',
                r: '5',
                fill: '#f58220'
            },
            {
                type: 'Shapes.Circle',
                cx: '1645',
                cy: '711',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 33,
        labels: [
            {
                x: 2230,
                y: 2067.34,
                name: 'Братиславская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Братиславская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2216',
                cy: '2060',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 34,
        labels: [
            {
                x: 1550.36,
                y: 2530.34,
                name: 'Бульвар',
                type:  'Shapes.Text'
            },
            {
                x: 1444.05,
                y: 2553.34,
                name: 'Адмирала Ушакова',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Бульвар Адмирала Ушакова',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1642',
                cy: '2535',
                r: '5',
                fill: '#acbfe3'
            }
        ]
    },
    {
        id: 35,
        labels: [
            {
                x: 1686,
                y: 2399.34,
                name: 'Бульвар',
                type:  'Shapes.Text'
            },
            {
                x: 1686,
                y: 2422.34,
                name: 'Дмитрия Донского',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Бульвар Дмитрия Донского',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '2397',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 36,
        labels: [
            {
                x: 1915,
                y: 833.336,
                name: 'Бульвар',
                type:  'Shapes.Text'
            },
            {
                x: 1915,
                y: 856.336,
                name: 'Рокоссовского',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Бульвар Рокоссовского',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1886,
                cy: 869,
                r: 5,
                fill: '#da2128'
            },
            {
                type: 'Shapes.Circle',
                cx: '1886',
                cy: '831',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 37,
        labels: [
            {
                x: 1528.16,
                y: 2659.34,
                name: 'Бунинская',
                type:  'Shapes.Text'
            },
            {
                x: 1570.07,
                y: 2682.34,
                name: 'Аллея',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Бунинская Аллея',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1643',
                cy: '2666',
                r: '5',
                fill: '#acbfe3'
            }
        ]
    },
    {
        id: 38,
        labels: [
            {
                x: 1911,
                y: 2506.34,
                name: 'Бутово',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Бутово',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1891',
                cy: '2500',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 39,
        labels: [
            {
                x: 1498,
                y: 914.336,
                name: 'Бутырская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Бутырская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1479',
                cy: '909',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 40,
        labels: [
            {
                x: 1689,
                y: 833.336,
                name: 'ВДНХ',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'ВДНХ',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '826',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 41,
        labels: [
            {
                x: 1800,
                y: 2123.34,
                name: 'Варшавская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Варшавская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1808',
                cy: '2096',
                r: '5',
                fill: '#6ac9c8'
            }
        ]
    },
    {
        id: 42,
        labels: [
            {
                x: 1704,
                y: 1845.34,
                name: 'Верхние',
                type:  'Shapes.Text'
            },
            {
                x: 1704,
                y: 1868.34,
                name: 'Котлы',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Верхние Котлы',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1714',
                cy: '1893',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 43,
        labels: [
            {
                x: 1036,
                y: 674.336,
                name: 'Верхние',
                type:  'Shapes.Text'
            },
            {
                x: 1036,
                y: 697.336,
                name: 'Лихоборы',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Верхние Лихоборы',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1130',
                cy: '670',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 44,
        labels: [
            {
                x: 1316,
                y: 721.336,
                name: 'Владыкино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Владыкино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1298',
                cy: '706',
                r: '5',
                fill: '#a1A2A3'
            },
            {
                type: 'Shapes.Circle',
                cx: '1298',
                cy: '725',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 45,
        labels: [
            {
                x: 1159,
                y: 357.336,
                name: 'Водники',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Водники',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1260',
                cy: '349',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 46,
        labels: [
            {
                x: 907,
                y: 815.336,
                name: 'Водный стадион',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Водный стадион',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '890',
                cy: '805',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 47,
        labels: [
            {
                x: 850,
                y: 899.336,
                name: 'Войковская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Войковская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '967',
                cy: '915',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 48,
        labels: [
            {
                x: 1960.18,
                y: 1670.34,
                name: 'Волгоградский',
                type:  'Shapes.Text'
            },
            {
                x: 2014.79,
                y: 1693.34,
                name: 'проспект',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Волгоградский проспект',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2059',
                cy: '1641',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 49,
        labels: [
            {
                x: 2194,
                y: 1936.34,
                name: 'Волжская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Волжская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2176',
                cy: '1930',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 50,
        labels: [
            {
                x: 403,
                y: 947.336,
                name: 'Волоколамская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Волоколамская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '569',
                cy: '941',
                r: '5',
                fill: '#0078bf'
            },
            {
                type: 'Shapes.Circle',
                cx: '544',
                cy: '967',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 51,
        labels: [
            {
                x: 1092,
                y: 1868.34,
                name: 'Воробьёвы горы',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Воробьёвы горы',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1068,
                cy: 1859,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 52,
        labels: [
            {
                x: 985,
                y: 1466.34,
                name: 'Выставочная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Выставочная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '967',
                cy: '1458',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 53,
        labels: [
            {
                x: 2372,
                y: 1821.34,
                name: 'Выхино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Выхино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2354',
                cy: '1816',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 54,
        labels: [
            {
                x: 769,
                y: 2000.92,
                name: 'Говорово',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Говорово',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '754',
                cy: '1996',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 55,
        labels: [
            {
                x: 1155,
                y: 944.336,
                name: 'Гражданская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Гражданская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1216',
                cy: '966',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 56,
        labels: [
            {
                x: 1150,
                y: 654.336,
                name: 'Дегунино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Дегунино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1260',
                cy: '648',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 57,
        labels: [
            {
                x: 747,
                y: 1418.34,
                name: 'Деловой центр',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Деловой центр',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '877',
                cy: '1383',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 58,
        labels: [
            {
                x: 984,
                y: 1442.34,
                name: 'Деловой центр',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Деловой центр',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '967',
                cy: '1438',
                r: '5',
                fill: '#6ac9c8'
            }
        ]
    },
    {
        id: 59,
        labels: [
            {
                x: 2066,
                y: 2004.34,
                name: 'Депо',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Депо',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2130',
                cy: '2001',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 60,
        labels: [
            {
                x: 1165,
                y: 1095.34,
                name: 'Динамо',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Динамо',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1138',
                cy: '1085',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 61,
        labels: [
            {
                x: 1316,
                y: 944.336,
                name: 'Дмитровская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Дмитровская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1298',
                cy: '939',
                r: '5',
                fill: '#a1A2A3'
            },
            {
                type: 'Shapes.Circle',
                cx: '1324',
                cy: '966',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 62,
        labels: [
            {
                x: 1586,
                y: 1809.34,
                name: 'Добрынинская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Добрынинская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1581',
                cy: '1788',
                r: '5',
                fill: '#894e35'
            }
        ]
    },
    {
        id: 63,
        labels: [
            {
                x: 1105,
                y: 407.336,
                name: 'Долгопрудная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Долгопрудная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1260',
                cy: '399',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 64,
        labels: [
            {
                x: 2025,
                y: 2348.34,
                name: 'Домодедовская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Домодедовская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2113',
                cy: '2321',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 65,
        labels: [
            {
                x: 1450,
                y: 1038.34,
                name: 'Достоевская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Достоевская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1501',
                cy: '1053',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 66,
        labels: [
            {
                x: 1847,
                y: 1725.34,
                name: 'Дубровка',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Дубровка',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1945',
                cy: '1700',
                r: '5',
                fill: '#b4d445'
            },
            {
                type: 'Shapes.Circle',
                cx: '1945',
                cy: '1740',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 67,
        labels: [
            {
                x: 2398,
                y: 1968.34,
                name: 'Жулебино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Жулебино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2380',
                cy: '1962',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 68,
        labels: [
            {
                x: 1814,
                y: 1877.34,
                name: 'ЗИЛ',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'ЗИЛ',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1804',
                cy: '1854',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 69,
        labels: [
            {
                x: 920,
                y: 1139.34,
                name: 'Зорге',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Зорге',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '905',
                cy: '1119',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 70,
        labels: [
            {
                x: 2230,
                y: 2302.34,
                name: 'Зябликово',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Зябликово',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2217',
                cy: '2296',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 71,
        labels: [
            {
                x: 1973,
                y: 1157.34,
                name: 'Измайлово',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Измайлово',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2094',
                cy: '1150',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 72,
        labels: [
            {
                x: 2210,
                y: 1102.34,
                name: 'Измайловская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Измайловская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2190',
                cy: '1089',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 73,
        labels: [
            {
                x: 1824,
                y: 1161.34,
                name: 'Каланчёвская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Каланчёвская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1804',
                cy: '1161',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 74,
        labels: [
            {
                x: 2050,
                y: 1547.34,
                name: 'Калитники',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Калитники',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2036',
                cy: '1542',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 75,
        labels: [
            {
                x: 1328,
                y: 2105.34,
                name: 'Калужская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Калужская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1314',
                cy: '2096',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 76,
        labels: [
            {
                x: 1741,
                y: 2156.34,
                name: 'Кантемировская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Кантемировская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1917',
                cy: '2144',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 77,
        labels: [
            {
                x: 1685,
                y: 2123.34,
                name: 'Каховская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Каховская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1690',
                cy: '2096',
                r: '5',
                fill: '#6ac9c8'
            }
        ]
    },
    {
        id: 78,
        labels: [
            {
                x: 1909,
                y: 2048.34,
                name: 'Каширская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Каширская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1892',
                cy: '2042',
                r: '5',
                fill: '#48b85e'
            },
            {
                type: 'Shapes.Circle',
                cx: '1874',
                cy: '2060',
                r: '5',
                fill: '#6ac9c8'
            }
        ]
    },
    {
        id: 79,
        labels: [
            {
                x: 1016,
                y: 1531.34,
                name: 'Киевская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Киевская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1124',
                cy: '1534',
                r: '5',
                fill: '#0078bf'
            },
            {
                type: 'Shapes.Circle',
                cx: '1124',
                cy: '1514',
                r: '5',
                fill: '#00c1f3'
            },
            {
                type: 'Shapes.Circle',
                cx: '1140',
                cy: '1525',
                r: '5',
                fill: '#894e35'
            }
        ]
    },
    {
        id: 80,
        labels: [
            {
                x: 1683,
                y: 1430.34,
                name: 'Китай-город',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Китай-город',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '1406',
                r: '5',
                fill: '#f58220'
            },
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '1426',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 81,
        labels: [
            {
                x: 2037,
                y: 1779.34,
                name: 'Кожуховская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Кожуховская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2020',
                cy: '1774',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 82,
        labels: [
            {
                x: 1905,
                y: 1964.34,
                name: 'Коломенская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Коломенская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1891',
                cy: '1952',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 83,
        labels: [
            {
                x: 1237,
                y: 2516.34,
                name: 'Коммунарка',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Коммунарка',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1216,
                cy: 2507,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 84,
        labels: [
            {
                x: 1770,
                y: 1202.34,
                name: 'Комсомольская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Комсомольская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1737,
                cy: 1193,
                r: 5,
                fill: '#da2128'
            },
            {
                type: 'Shapes.Circle',
                cx: '1752',
                cy: '1178',
                r: '5',
                fill: '#894e35'
            }
        ]
    },
    {
        id: 85,
        labels: [
            {
                x: 1328,
                y: 2206.34,
                name: 'Коньково',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Коньково',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1314',
                cy: '2196',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 86,
        labels: [
            {
                x: 1093,
                y: 871.336,
                name: 'Коптево',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Коптево',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1069',
                cy: '862',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 87,
        labels: [
            {
                x: 2401,
                y: 1911.34,
                name: 'Косино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Косино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2380',
                cy: '1888',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 88,
        labels: [
            {
                x: 2398,
                y: 2038.34,
                name: 'Котельники',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Котельники',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2381',
                cy: '2028',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 89,
        labels: [
            {
                x: 2203,
                y: 2360.34,
                name: 'Красногвардейская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Красногвардейская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2217',
                cy: '2321',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 90,
        labels: [
            {
                x: 251,
                y: 756.336,
                name: 'Красногорская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Красногорская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '413',
                cy: '751',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 91,
        labels: [
            {
                x: 1104,
                y: 1372.34,
                name: 'Краснопресненская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Краснопресненская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1141',
                cy: '1345',
                r: '5',
                fill: '#894e35'
            }
        ]
    },
    {
        id: 92,
        labels: [
            {
                x: 1845,
                y: 1109.34,
                name: 'Красносельская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Красносельская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1831,
                cy: 1099,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 93,
        labels: [
            {
                x: 1717,
                y: 1244.34,
                name: 'Красные Ворота',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Красные Ворота',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1700,
                cy: 1232,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 94,
        labels: [
            {
                x: 1060,
                y: 924.336,
                name: 'Красный',
                type:  'Shapes.Text'
            },
            {
                x: 1060,
                y: 947.336,
                name: 'Балтиец',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Красный Балтиец',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1100',
                cy: '966',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 95,
        labels: [
            {
                x: 1912,
                y: 2384.34,
                name: 'Красный Строитель',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Красный Строитель',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1891',
                cy: '2380',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 96,
        labels: [
            {
                x: 1901,
                y: 1577.34,
                name: 'Крестьянская',
                type:  'Shapes.Text'
            },
            {
                x: 1901,
                y: 1600.34,
                name: 'Застава',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Крестьянская Застава',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1935',
                cy: '1618',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 97,
        labels: [
            {
                x: 1323,
                y: 1640.34,
                name: 'Кропоткинская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Кропоткинская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1301,
                cy: 1629,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 98,
        labels: [
            {
                x: 592,
                y: 1186.34,
                name: 'Крылатское',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Крылатское',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '569',
                cy: '1176',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 99,
        labels: [
            {
                x: 1522,
                y: 1966.34,
                name: 'Крымская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Крымская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1541',
                cy: '1935',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 100,
        labels: [
            {
                x: 2019,
                y: 1941.34,
                name: 'Кубанская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Кубанская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2130',
                cy: '1934',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 101,
        labels: [
            {
                x: 1438,
                y: 1328.34,
                name: 'Кузнецкий Мост',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Кузнецкий Мост',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1587',
                cy: '1345',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 102,
        labels: [
            {
                x: 2115,
                y: 1703.34,
                name: 'Кузьминки',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Кузьминки',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2232',
                cy: '1697',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 103,
        labels: [
            {
                x: 592,
                y: 1338.34,
                name: 'Кунцевская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Кунцевская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '569',
                cy: '1361',
                r: '5',
                fill: '#0078bf'
            },
            {
                type: 'Shapes.Circle',
                cx: '594',
                cy: '1361',
                r: '5',
                fill: '#00c1f3'
            },
            {
                type: 'Shapes.Circle',
                cx: '544',
                cy: '1386',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 104,
        labels: [
            {
                x: 1891,
                y: 1371.34,
                name: 'Курская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Курская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1876',
                cy: '1405',
                r: '5',
                fill: '#0078bf'
            },
            {
                type: 'Shapes.Circle',
                cx: '1856',
                cy: '1384',
                r: '5',
                fill: '#894e35'
            },
            {
                type: 'Shapes.Circle',
                cx: '1876',
                cy: '1384',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 105,
        labels: [
            {
                x: 936,
                y: 1632.34,
                name: 'Кутузовская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Кутузовская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '924',
                cy: '1611',
                r: '5',
                fill: '#00c1f3'
            },
            {
                type: 'Shapes.Circle',
                cx: '941',
                cy: '1594',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 106,
        labels: [
            {
                x: 1341,
                y: 1885.34,
                name: 'Ленинский проспект',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Ленинский проспект',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1314',
                cy: '1888',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 107,
        labels: [
            {
                x: 2401,
                y: 1851.34,
                name: 'Лермонтовский',
                type:  'Shapes.Text'
            },
            {
                x: 2401,
                y: 1874.34,
                name: 'проспект',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Лермонтовский проспект',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2380',
                cy: '1864',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 108,
        labels: [
            {
                x: 1492,
                y: 2366.34,
                name: 'Лесопарковая',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Лесопарковая',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1554',
                cy: '2337',
                r: '5',
                fill: '#acbfe3'
            }
        ]
    },
    {
        id: 109,
        labels: [
            {
                x: 2006,
                y: 1368.34,
                name: 'Лефортово',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Лефортово',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1994',
                cy: '1358',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 110,
        labels: [
            {
                x: 1136,
                y: 557.336,
                name: 'Лианозово',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Лианозово',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1260',
                cy: '550',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 111,
        labels: [
            {
                x: 1155,
                y: 819.336,
                name: 'Лихоборы',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Лихоборы',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1136',
                cy: '808',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 112,
        labels: [
            {
                x: 1181,
                y: 207.336,
                name: 'Лобня',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Лобня',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1260',
                cy: '197',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 113,
        labels: [
            {
                x: 1992,
                y: 925.336,
                name: 'Локомотив',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Локомотив',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1971',
                cy: '914',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 114,
        labels: [
            {
                x: 769,
                y: 1788.34,
                name: 'Ломоносовский',
                type:  'Shapes.Text'
            },
            {
                x: 769,
                y: 1811.34,
                name: 'проспект',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Ломоносовский проспект',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '754',
                cy: '1796',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 115,
        labels: [
            {
                x: 1573,
                y: 1387.34,
                name: 'Лубянка',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Лубянка',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1572,
                cy: 1359,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 116,
        labels: [
            {
                x: 1164,
                y: 1830.34,
                name: 'Лужники',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Лужники',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1137',
                cy: '1820',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 117,
        labels: [
            {
                x: 2578,
                y: 1983.34,
                name: 'Лухмановская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Лухмановская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2561',
                cy: '1978',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 118,
        labels: [
            {
                x: 2230,
                y: 2005.34,
                name: 'Люблино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Люблино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2216',
                cy: '1999',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 119,
        labels: [
            {
                x: 1189,
                y: 508.336,
                name: 'Марк',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Марк',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1260',
                cy: '501',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 120,
        labels: [
            {
                x: 1698,
                y: 1647.34,
                name: 'Марксистская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Марксистская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1824',
                cy: '1615',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 121,
        labels: [
            {
                x: 1525,
                y: 996.336,
                name: 'Марьина Роща',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Марьина Роща',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1500',
                cy: '991',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 122,
        labels: [
            {
                x: 2230,
                y: 2126.34,
                name: 'Марьино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Марьино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2216',
                cy: '2120',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 123,
        labels: [
            {
                x: 1315,
                y: 1252.34,
                name: 'Маяковская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Маяковская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1298',
                cy: '1247',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 124,
        labels: [
            {
                x: 1689,
                y: 563.336,
                name: 'Медведково',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Медведково',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '551',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 125,
        labels: [
            {
                x: 714,
                y: 1361.34,
                name: 'Международная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Международная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '857',
                cy: '1383',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 126,
        labels: [
            {
                x: 1306,
                y: 1125.34,
                name: 'Менделеевская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Менделеевская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1403',
                cy: '1098',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 127,
        labels: [
            {
                x: 771,
                y: 1726.34,
                name: 'Минская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Минская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '764',
                cy: '1700',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 128,
        labels: [
            {
                x: 478,
                y: 852.336,
                name: 'Митино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Митино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '569',
                cy: '846',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 129,
        labels: [
            {
                x: 769,
                y: 1901.63,
                name: 'Мичуринскийпроспект',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Мичуринскийпроспект',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '754',
                cy: '1896',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 130,
        labels: [
            {
                x: 592,
                y: 1256.34,
                name: 'Молодёжная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Молодёжная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '569',
                cy: '1246',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 131,
        labels: [
            {
                x: 1795,
                y: 1476.34,
                name: 'Москва-Товарная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Москва-Товарная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1974',
                cy: '1481',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 132,
        labels: [
            {
                x: 1986,
                y: 2183.34,
                name: 'Москворечье',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Москворечье',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2130',
                cy: '2179',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 133,
        labels: [
            {
                x: 592,
                y: 1046.34,
                name: 'Мякинино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Мякинино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '569',
                cy: '1036',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 134,
        labels: [
            {
                x: 1688,
                y: 1948.34,
                name: 'Нагатинская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Нагатинская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '1940',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 135,
        labels: [
            {
                x: 1684,
                y: 2005.34,
                name: 'Нагорная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Нагорная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '1997',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 136,
        labels: [
            {
                x: 302,
                y: 606.336,
                name: 'Нахабино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Нахабино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '414',
                cy: '595',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 137,
        labels: [
            {
                x: 1519.37,
                y: 2040.34,
                name: 'Нахимовский',
                type:  'Shapes.Text'
            },
            {
                x: 1560.79,
                y: 2063.34,
                name: 'проспект',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Нахимовский проспект',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '2045',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 138,
        labels: [
            {
                x: 2578,
                y: 2038.34,
                name: 'Некрасовка',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Некрасовка',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2562',
                cy: '2034',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 139,
        labels: [
            {
                x: 279,
                y: 1239.34,
                name: 'Немчиновка',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Немчиновка',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '416',
                cy: '1234',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 140,
        labels: [
            {
                x: 2114,
                y: 1484.34,
                name: 'Нижегородская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Нижегородская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2097',
                cy: '1489',
                r: '5',
                fill: '#e66ac0'
            },
            {
                type: 'Shapes.Circle',
                cx: '2097',
                cy: '1466',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 141,
        labels: [
            {
                x: 2315,
                y: 1349.34,
                name: 'Новогиреево',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Новогиреево',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2362',
                cy: '1325',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 142,
        labels: [
            {
                x: 1124,
                y: 457.336,
                name: 'Новодачная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Новодачная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1260',
                cy: '449',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 143,
        labels: [
            {
                x: 2405,
                y: 1303.34,
                name: 'Новокосино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Новокосино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2455',
                cy: '1325',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 144,
        labels: [
            {
                x: 1610,
                y: 1561.34,
                name: 'Новокузнецкая',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Новокузнецкая',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1629',
                cy: '1581',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 145,
        labels: [
            {
                x: 769,
                y: 2149.85,
                name: 'Новопеределкино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Новопеределкино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '754',
                cy: '2146',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 146,
        labels: [
            {
                x: 1281,
                y: 1069.34,
                name: 'Новослободская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Новослободская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1390',
                cy: '1084',
                r: '5',
                fill: '#894e35'
            }
        ]
    },
    {
        id: 147,
        labels: [
            {
                x: 2110,
                y: 1603.34,
                name: 'Новохохловская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Новохохловская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2049',
                cy: '1596',
                r: '5',
                fill: '#ffa8af'
            },
            {
                type: 'Shapes.Circle',
                cx: '2089',
                cy: '1596',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 148,
        labels: [
            {
                x: 1428,
                y: 2316.34,
                name: 'Новоясеневская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Новоясеневская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1410',
                cy: '2322',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 149,
        labels: [
            {
                x: 1327,
                y: 2053.34,
                name: 'Новые Черёмушки',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Новые Черёмушки',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1314',
                cy: '2046',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 150,
        labels: [
            {
                x: 303,
                y: 1089.34,
                name: 'Одинцово',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Одинцово',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '415',
                cy: '1082',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 151,
        labels: [
            {
                x: 769,
                y: 1951.27,
                name: 'Озёрная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Озёрная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '754',
                cy: '1946',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 152,
        labels: [
            {
                x: 1126,
                y: 769.336,
                name: 'Окружная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Окружная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1234',
                cy: '776',
                r: '5',
                fill: '#b4d445'
            },
            {
                type: 'Shapes.Circle',
                cx: '1234',
                cy: '750',
                r: '5',
                fill: '#ffa8af'
            },
            {
                type: 'Shapes.Circle',
                cx: '1259',
                cy: '766',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 153,
        labels: [
            {
                x: 2281,
                y: 1703.34,
                name: 'Окская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Окская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2263',
                cy: '1697',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 154,
        labels: [
            {
                x: 1429,
                y: 1778.34,
                name: 'Октябрьская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Октябрьская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1401',
                cy: '1785',
                r: '5',
                fill: '#894e35'
            },
            {
                type: 'Shapes.Circle',
                cx: '1416',
                cy: '1770',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 155,
        labels: [
            {
                x: 746.828,
                y: 1091.34,
                name: 'Октябрьское',
                type:  'Shapes.Text'
            },
            {
                x: 820.305,
                y: 1114.34,
                name: 'Поле',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Октябрьское Поле',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '885',
                cy: '1091',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 156,
        labels: [
            {
                x: 1187,
                y: 2466.34,
                name: 'Ольховая',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Ольховая',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1167,
                cy: 2457,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 157,
        labels: [
            {
                x: 313,
                y: 706.336,
                name: 'Опалиха',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Опалиха',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '414',
                cy: '700',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 158,
        labels: [
            {
                x: 2062,
                y: 2274.34,
                name: 'Орехово',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Орехово',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2045',
                cy: '2276',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 159,
        labels: [
            {
                x: 1911,
                y: 2626.34,
                name: 'Остафьево',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Остафьево',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1891',
                cy: '2620',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 160,
        labels: [
            {
                x: 1321,
                y: 655.336,
                name: 'Отрадное',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Отрадное',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1298',
                cy: '645',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 161,
        labels: [
            {
                x: 1521,
                y: 1436.34,
                name: 'Охотный Ряд',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Охотный Ряд',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1502,
                cy: 1429,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 162,
        labels: [
            {
                x: 1608,
                y: 1702.34,
                name: 'Павелецкая',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Павелецкая',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1730',
                cy: '1682',
                r: '5',
                fill: '#48b85e'
            },
            {
                type: 'Shapes.Circle',
                cx: '1745',
                cy: '1696',
                r: '5',
                fill: '#894e35'
            }
        ]
    },
    {
        id: 163,
        labels: [
            {
                x: 306,
                y: 806.336,
                name: 'Павшино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Павшино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '414',
                cy: '800',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 164,
        labels: [
            {
                x: 940,
                y: 1076.34,
                name: 'Панфиловская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Панфиловская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '923',
                cy: '1071',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 165,
        labels: [
            {
                x: 652,
                y: 1672.34,
                name: 'Парк Победы',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Парк Победы',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '800',
                cy: '1665',
                r: '5',
                fill: '#0078bf'
            },
            {
                type: 'Shapes.Circle',
                cx: '813',
                cy: '1652',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 166,
        labels: [
            {
                x: 1273,
                y: 1695.34,
                name: 'Парк культуры',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Парк культуры',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1252,
                cy: 1676,
                r: 5,
                fill: '#da2128'
            },
            {
                type: 'Shapes.Circle',
                cx: '1237',
                cy: '1691',
                r: '5',
                fill: '#894e35'
            }
        ]
    },
    {
        id: 167,
        labels: [
            {
                x: 2156,
                y: 1160.34,
                name: 'Партизанская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Партизанская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2132',
                cy: '1150',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 168,
        labels: [
            {
                x: 303,
                y: 856.336,
                name: 'Пенягино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Пенягино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '414',
                cy: '850',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 169,
        labels: [
            {
                x: 2248,
                y: 1012.34,
                name: 'Первомайская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Первомайская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2230',
                cy: '1005',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 170,
        labels: [
            {
                x: 2034,
                y: 2064.34,
                name: 'Перерва',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Перерва',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2130',
                cy: '2060',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 171,
        labels: [
            {
                x: 2230,
                y: 1304.34,
                name: 'Перово',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Перово',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2260',
                cy: '1326',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 172,
        labels: [
            {
                x: 1048.21,
                y: 1152.34,
                name: 'Петровский',
                type:  'Shapes.Text'
            },
            {
                x: 1116.55,
                y: 1175.34,
                name: 'парк',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Петровский парк',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1138',
                cy: '1113',
                r: '5',
                fill: '#ffc61a'
            },
            {
                type: 'Shapes.Circle',
                cx: '1138',
                cy: '1125',
                r: '5',
                fill: '#6ac9c8'
            }
        ]
    },
    {
        id: 173,
        labels: [
            {
                x: 1316,
                y: 781.336,
                name: 'Петровско-Разумовская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Петровско-Разумовская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1298',
                cy: '801',
                r: '5',
                fill: '#a1A2A3'
            },
            {
                type: 'Shapes.Circle',
                cx: '1318',
                cy: '801',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 174,
        labels: [
            {
                x: 2114,
                y: 1856.34,
                name: 'Печатники',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Печатники',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2098',
                cy: '1851',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 175,
        labels: [
            {
                x: 525,
                y: 1438.34,
                name: 'Пионерская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Пионерская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '654',
                cy: '1420',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 176,
        labels: [
            {
                x: 709,
                y: 777.336,
                name: 'Планерная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Планерная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '694',
                cy: '765',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 177,
        labels: [
            {
                x: 1341,
                y: 1914.34,
                name: 'Площадь Гагарина',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Площадь Гагарина',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1314',
                cy: '1907',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 178,
        labels: [
            {
                x: 1966,
                y: 1522.34,
                name: 'Площадь Ильича',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Площадь Ильича',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1953',
                cy: '1522',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 179,
        labels: [
            {
                x: 1514,
                y: 1500.34,
                name: 'Площадь Революции',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Площадь Революции',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1502',
                cy: '1477',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 180,
        labels: [
            {
                x: 1911,
                y: 2741.34,
                name: 'Подольск',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Подольск',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1891',
                cy: '2737',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 181,
        labels: [
            {
                x: 815,
                y: 924.336,
                name: 'Покровско',
                type:  'Shapes.Text'
            },
            {
                x: 815,
                y: 947.336,
                name: 'Стрешнево',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Покровско-Стрешнево',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '865',
                cy: '964',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 182,
        labels: [
            {
                x: 1912,
                y: 2328.34,
                name: 'Покровское',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Покровское',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1891',
                cy: '2320',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 183,
        labels: [
            {
                x: 955,
                y: 1195.34,
                name: 'Полежаевская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Полежаевская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '927',
                cy: '1194',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 184,
        labels: [
            {
                x: 1517,
                y: 1708.34,
                name: 'Полянка',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Полянка',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1517',
                cy: '1721',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 185,
        labels: [
            {
                x: 1553,
                y: 2252.34,
                name: 'Пражская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Пражская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '2246',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 186,
        labels: [
            {
                x: 1938,
                y: 1011.34,
                name: 'Преображенская',
                type:  'Shapes.Text'
            },
            {
                x: 1938,
                y: 1034.34,
                name: 'площадь',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Преображенская площадь',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1925,
                cy: 1005,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 187,
        labels: [
            {
                x: 1137,
                y: 2416.34,
                name: 'Прокшино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Прокшино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1117,
                cy: 2407,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 188,
        labels: [
            {
                x: 1799,
                y: 1672.34,
                name: 'Пролетарская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Пролетарская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1935',
                cy: '1641',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 189,
        labels: [
            {
                x: 1061,
                y: 2025.34,
                name: 'Проспект Вернадского',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Проспект Вернадского',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1044,
                cy: 2016,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 190,
        labels: [
            {
                x: 1508,
                y: 1126.34,
                name: 'Проспект Мира',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Проспект Мира',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '1111',
                r: '5',
                fill: '#894e35'
            },
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '1130',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 191,
        labels: [
            {
                x: 1328,
                y: 2005.34,
                name: 'Профсоюзная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Профсоюзная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1314',
                cy: '1997',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 192,
        labels: [
            {
                x: 1345,
                y: 1375.34,
                name: 'Пушкинская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Пушкинская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1362',
                cy: '1344',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 193,
        labels: [
            {
                x: 449.598,
                y: 774.336,
                name: 'Пятницкое',
                type:  'Shapes.Text'
            },
            {
                x: 492.879,
                y: 797.336,
                name: 'шоссе',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Пятницкое шоссе',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '569',
                cy: '768',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 194,
        labels: [
            {
                x: 317,
                y: 1349.34,
                name: 'Рабочий Посёлок',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Рабочий Посёлок',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '499',
                cy: '1341',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 195,
        labels: [
            {
                x: 769,
                y: 1851.98,
                name: 'Раменки',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Раменки',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '754',
                cy: '1846',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 196,
        labels: [
            {
                x: 769,
                y: 2199.5,
                name: 'Рассказовка',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Рассказовка',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '754',
                cy: '2193',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 197,
        labels: [
            {
                x: 907,
                y: 768.336,
                name: 'Речной вокзал',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Речной вокзал',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '890',
                cy: '760',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 198,
        labels: [
            {
                x: 1688,
                y: 1028.34,
                name: 'Рижская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Рижская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '1053',
                r: '5',
                fill: '#f58220'
            },
            {
                type: 'Shapes.Circle',
                cx: '1696',
                cy: '1053',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 199,
        labels: [
            {
                x: 1838,
                y: 1511.34,
                name: 'Римская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Римская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1935',
                cy: '1504',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 200,
        labels: [
            {
                x: 1790,
                y: 752.336,
                name: 'Ростокино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Ростокино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1785',
                cy: '765',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 201,
        labels: [
            {
                x: 1061,
                y: 2235.34,
                name: 'Румянцево',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Румянцево',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1044,
                cy: 2226,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 202,
        labels: [
            {
                x: 2317,
                y: 1766.34,
                name: 'Рязанский проспект',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Рязанский проспект',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2299',
                cy: '1762',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 203,
        labels: [
            {
                x: 1329,
                y: 999.336,
                name: 'Савёловская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Савёловская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1281',
                cy: '1009',
                r: '5',
                fill: '#ffc61a'
            },
            {
                type: 'Shapes.Circle',
                cx: '1314',
                cy: '1009',
                r: '5',
                fill: '#a1A2A3'
            },
            {
                type: 'Shapes.Circle',
                cx: '1296',
                cy: '1009',
                r: '5',
                fill: '#6ac9c8'
            },
            {
                type: 'Shapes.Circle',
                cx: '1259',
                cy: '1009',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 204,
        labels: [
            {
                x: 1061,
                y: 2305.34,
                name: 'Саларьево',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Саларьево',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1044,
                cy: 2296,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 205,
        labels: [
            {
                x: 1689,
                y: 655.336,
                name: 'Свиблово',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Свиблово',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '645',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 206,
        labels: [
            {
                x: 1482,
                y: 2099.34,
                name: 'Севастопольская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Севастопольская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '2096',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 207,
        labels: [
            {
                x: 940,
                y: 585.336,
                name: 'Селигерская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Селигерская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1074',
                cy: '577',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 208,
        labels: [
            {
                x: 1930,
                y: 1219.34,
                name: 'Семёновская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Семёновская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2073',
                cy: '1207',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 209,
        labels: [
            {
                x: 1558,
                y: 1757.34,
                name: 'Серпуховская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Серпуховская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1566',
                cy: '1773',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 210,
        labels: [
            {
                x: 361,
                y: 1293.34,
                name: 'Сетунь',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Сетунь',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '444',
                cy: '1286',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 211,
        labels: [
            {
                x: 1911,
                y: 2686.34,
                name: 'Силикатная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Силикатная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1891',
                cy: '2680',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 212,
        labels: [
            {
                x: 306,
                y: 1189.34,
                name: 'Сколково',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Сколково',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '416',
                cy: '1185',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 213,
        labels: [
            {
                x: 399,
                y: 1491.34,
                name: 'Славянский бульвар',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Славянский бульвар',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '621',
                cy: '1484',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 214,
        labels: [
            {
                x: 1171,
                y: 1456.34,
                name: 'Смоленская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Смоленская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1206',
                cy: '1478',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 215,
        labels: [
            {
                x: 1171,
                y: 1559.34,
                name: 'Смоленская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Смоленская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1203',
                cy: '1537',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 216,
        labels: [
            {
                x: 1076,
                y: 1014.34,
                name: 'Сокол',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Сокол',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1062',
                cy: '1010',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 217,
        labels: [
            {
                x: 2128,
                y: 1252.34,
                name: 'Соколиная гора',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Соколиная гора',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2113',
                cy: '1245',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 218,
        labels: [
            {
                x: 1892,
                y: 1062.34,
                name: 'Сокольники',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Сокольники',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1878,
                cy: 1052,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 219,
        labels: [
            {
                x: 769,
                y: 2050.56,
                name: 'Солнцево',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Солнцево',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '754',
                cy: '2046',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 220,
        labels: [
            {
                x: 729,
                y: 1019.34,
                name: 'Спартак',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Спартак',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '816',
                cy: '997',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 221,
        labels: [
            {
                x: 1164,
                y: 1800.34,
                name: 'Спортивная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Спортивная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1137,
                cy: 1790,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 222,
        labels: [
            {
                x: 1642,
                y: 1343.34,
                name: 'Сретенский бульвар',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Сретенский бульвар',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1649',
                cy: '1308',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 223,
        labels: [
            {
                x: 2197,
                y: 1576.34,
                name: 'Стахановская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Стахановская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2178',
                cy: '1570',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 224,
        labels: [
            {
                x: 926,
                y: 1012.34,
                name: 'Стрешнево',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Стрешнево',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '967',
                cy: '986',
                r: '5',
                fill: '#ffa8af'
            },
            {
                type: 'Shapes.Circle',
                cx: '967',
                cy: '966',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 225,
        labels: [
            {
                x: 592,
                y: 1116.34,
                name: 'Строгино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Строгино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '569',
                cy: '1106',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 226,
        labels: [
            {
                x: 855,
                y: 1534.34,
                name: 'Студенческая',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Студенческая',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '987',
                cy: '1547',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 227,
        labels: [
            {
                x: 1531,
                y: 1201.34,
                name: 'Сухаревская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Сухаревская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '1197',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 228,
        labels: [
            {
                x: 709,
                y: 856.336,
                name: 'Сходненская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Сходненская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '693',
                cy: '849',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 229,
        labels: [
            {
                x: 1780,
                y: 1574.34,
                name: 'Таганская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Таганская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1823',
                cy: '1593',
                r: '5',
                fill: '#894e35'
            },
            {
                type: 'Shapes.Circle',
                cx: '1843',
                cy: '1604',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 230,
        labels: [
            {
                x: 1376,
                y: 1310.34,
                name: 'Тверская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Тверская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1373',
                cy: '1325',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 231,
        labels: [
            {
                x: 1521,
                y: 1460.34,
                name: 'Театральная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Театральная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1502',
                cy: '1453',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 232,
        labels: [
            {
                x: 2147,
                y: 1669.34,
                name: 'Текстильщики',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Текстильщики',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2145',
                cy: '1641',
                r: '5',
                fill: '#8e479b'
            },
            {
                type: 'Shapes.Circle',
                cx: '2130',
                cy: '1656',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 233,
        labels: [
            {
                x: 978,
                y: 1403.34,
                name: 'Тестовская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Тестовская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '967',
                cy: '1383',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 234,
        labels: [
            {
                x: 1905,
                y: 1872.34,
                name: 'Технопарк',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Технопарк',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1891',
                cy: '1862',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 235,
        labels: [
            {
                x: 1314,
                y: 880.336,
                name: 'Тимирязевская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Тимирязевская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1298',
                cy: '873',
                r: '5',
                fill: '#a1A2A3'
            },
            {
                type: 'Shapes.Circle',
                cx: '1259',
                cy: '873',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 236,
        labels: [
            {
                x: 1495,
                y: 1624.34,
                name: 'Третьяковская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Третьяковская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1607',
                cy: '1581',
                r: '5',
                fill: '#f58220'
            },
            {
                type: 'Shapes.Circle',
                cx: '1618',
                cy: '1600',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 237,
        labels: [
            {
                x: 607,
                y: 997.336,
                name: 'Трикотажная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Трикотажная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '661',
                cy: '964',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 238,
        labels: [
            {
                x: 1061,
                y: 2165.34,
                name: 'Тропарёво',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Тропарёво',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1044,
                cy: 2156,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 239,
        labels: [
            {
                x: 1515,
                y: 1170.34,
                name: 'Трубная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Трубная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1502',
                cy: '1185',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 240,
        labels: [
            {
                x: 1541,
                y: 1859.34,
                name: 'Тульская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Тульская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1646',
                cy: '1850',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 241,
        labels: [
            {
                x: 1684,
                y: 1293.34,
                name: 'Тургеневская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Тургеневская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1665',
                cy: '1293',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 242,
        labels: [
            {
                x: 629,
                y: 940.336,
                name: 'Тушинская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Тушинская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '750',
                cy: '931',
                r: '5',
                fill: '#8e479b'
            },
            {
                type: 'Shapes.Circle',
                cx: '750',
                cy: '967',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 243,
        labels: [
            {
                x: 1355,
                y: 2249.34,
                name: 'Тёплый Стан',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Тёплый Стан',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1337',
                cy: '2246',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 244,
        labels: [
            {
                x: 1990,
                y: 1725.34,
                name: 'Угрешская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Угрешская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1983',
                cy: '1701',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 245,
        labels: [
            {
                x: 996,
                y: 1344.34,
                name: 'Улица',
                type:  'Shapes.Text'
            },
            {
                x: 996,
                y: 1367.34,
                name: '1905 года',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Улица 1905 года',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1071',
                cy: '1335',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 246,
        labels: [
            {
                x: 1689,
                y: 2306.34,
                name: 'Улица',
                type:  'Shapes.Text'
            },
            {
                x: 1689,
                y: 2329.34,
                name: 'Академика Янгеля',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Улица Академика Янгеля',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '2296',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 247,
        labels: [
            {
                x: 1570.27,
                y: 2601.34,
                name: 'Улица',
                type:  'Shapes.Text'
            },
            {
                x: 1530.01,
                y: 2624.34,
                name: 'Горчакова',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Улица Горчакова',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1642',
                cy: '2601',
                r: '5',
                fill: '#acbfe3'
            }
        ]
    },
    {
        id: 248,
        labels: [
            {
                x: 2578,
                y: 1917.34,
                name: 'Улица',
                type:  'Shapes.Text'
            },
            {
                x: 2578,
                y: 1940.34,
                name: 'Дмитриевского',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Улица Дмитриевского',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2560',
                cy: '1922',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 249,
        labels: [
            {
                x: 1570.27,
                y: 2461.34,
                name: 'Улица',
                type:  'Shapes.Text'
            },
            {
                x: 1494.6,
                y: 2484.34,
                name: 'Скобелевская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Улица Скобелевская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1642',
                cy: '2466',
                r: '5',
                fill: '#acbfe3'
            }
        ]
    },
    {
        id: 250,
        labels: [
            {
                x: 1570.27,
                y: 2392.34,
                name: 'Улица',
                type:  'Shapes.Text'
            },
            {
                x: 1451.05,
                y: 2415.34,
                name: 'Старокачаловская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Улица Старокачаловская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1642',
                cy: '2397',
                r: '5',
                fill: '#acbfe3'
            }
        ]
    },
    {
        id: 251,
        labels: [
            {
                x: 1061,
                y: 1955.34,
                name: 'Университет',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Университет',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1044,
                cy: 1946,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 252,
        labels: [
            {
                x: 1087,
                y: 2366.34,
                name: 'Филатов Луг',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Филатов Луг',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1067,
                cy: 2356,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 253,
        labels: [
            {
                x: 825,
                y: 1563.34,
                name: 'Фили',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Фили',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '809',
                cy: '1576',
                r: '5',
                fill: '#00c1f3'
            },
            {
                type: 'Shapes.Circle',
                cx: '809',
                cy: '1541',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 254,
        labels: [
            {
                x: 716,
                y: 1461.34,
                name: 'Филёвский парк',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Филёвский парк',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '710',
                cy: '1476',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 255,
        labels: [
            {
                x: 1432,
                y: 848.336,
                name: 'Фонвизинская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Фонвизинская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1414',
                cy: '843',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 256,
        labels: [
            {
                x: 1205,
                y: 1755.34,
                name: 'Фрунзенская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Фрунзенская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1185,
                cy: 1744,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 257,
        labels: [
            {
                x: 1126,
                y: 307.336,
                name: 'Хлебниково',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Хлебниково',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1260',
                cy: '299',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 258,
        labels: [
            {
                x: 907,
                y: 677.336,
                name: 'Ховрино',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Ховрино',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '890',
                cy: '670',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 259,
        labels: [
            {
                x: 774,
                y: 1198.34,
                name: 'Хорошёво',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Хорошёво',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '886',
                cy: '1194',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 260,
        labels: [
            {
                x: 956,
                y: 1234.34,
                name: 'Хорошёвская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Хорошёвская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '927',
                cy: '1214',
                r: '5',
                fill: '#ffc61a'
            },
            {
                type: 'Shapes.Circle',
                cx: '927',
                cy: '1229',
                r: '5',
                fill: '#6ac9c8'
            }
        ]
    },
    {
        id: 261,
        labels: [
            {
                x: 971,
                y: 1109.34,
                name: 'ЦСКА',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'ЦСКА',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1015',
                cy: '1125',
                r: '5',
                fill: '#ffc61a'
            },
            {
                type: 'Shapes.Circle',
                cx: '1016',
                cy: '1140',
                r: '5',
                fill: '#6ac9c8'
            }
        ]
    },
    {
        id: 262,
        labels: [
            {
                x: 1835,
                y: 2200.34,
                name: 'Царицыно',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Царицыно',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1959',
                cy: '2191',
                r: '5',
                fill: '#48b85e'
            },
            {
                type: 'Shapes.Circle',
                cx: '1959',
                cy: '2224',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 263,
        labels: [
            {
                x: 1376,
                y: 1184.34,
                name: 'Цветной',
                type:  'Shapes.Text'
            },
            {
                x: 1376,
                y: 1207.34,
                name: 'бульвар',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Цветной бульвар',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1481',
                cy: '1185',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 264,
        labels: [
            {
                x: 1810,
                y: 963.336,
                name: 'Черкизовская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Черкизовская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1950,
                cy: 933,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 265,
        labels: [
            {
                x: 1515,
                y: 2152.34,
                name: 'Чертановская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Чертановская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '2146',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 266,
        labels: [
            {
                x: 1243,
                y: 1306.34,
                name: 'Чеховская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Чеховская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1351',
                cy: '1325',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 267,
        labels: [
            {
                x: 1507,
                y: 1267.34,
                name: 'Чистые пруды',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Чистые пруды',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1644,
                cy: 1288,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 268,
        labels: [
            {
                x: 1726,
                y: 1400.34,
                name: 'Чкаловская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Чкаловская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1856',
                cy: '1404',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 269,
        labels: [
            {
                x: 1368,
                y: 1840.34,
                name: 'Шаболовская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Шаболовская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1344',
                cy: '1841',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 270,
        labels: [
            {
                x: 909,
                y: 1286.34,
                name: 'Шелепиха',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Шелепиха',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '898',
                cy: '1315',
                r: '5',
                fill: '#ffc61a'
            },
            {
                type: 'Shapes.Circle',
                cx: '910',
                cy: '1327',
                r: '5',
                fill: '#6ac9c8'
            },
            {
                type: 'Shapes.Circle',
                cx: '875',
                cy: '1292',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 271,
        labels: [
            {
                x: 1077,
                y: 257.336,
                name: 'Шереметьевская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Шереметьевская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1260',
                cy: '249',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 272,
        labels: [
            {
                x: 2230,
                y: 2246.34,
                name: 'Шипиловская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Шипиловская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2216',
                cy: '2240',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 273,
        labels: [
            {
                x: 2135,
                y: 1353.34,
                name: 'Шоссе',
                type:  'Shapes.Text'
            },
            {
                x: 2135,
                y: 1376.34,
                name: 'Энтузиастов',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Шоссе Энтузиастов',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2156',
                cy: '1327',
                r: '5',
                fill: '#ffc61a'
            },
            {
                type: 'Shapes.Circle',
                cx: '2116',
                cy: '1327',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 274,
        labels: [
            {
                x: 1911,
                y: 2566.34,
                name: 'Щербинка',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Щербинка',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1891',
                cy: '2560',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 275,
        labels: [
            {
                x: 738,
                y: 1053.34,
                name: 'Щукинская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Щукинская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '856',
                cy: '1035',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 276,
        labels: [
            {
                x: 2248,
                y: 933.336,
                name: 'Щёлковская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Щёлковская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2231',
                cy: '926',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 277,
        labels: [
            {
                x: 1826,
                y: 1273.34,
                name: 'Электрозаводская',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Электрозаводская',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2014',
                cy: '1264',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 278,
        labels: [
            {
                x: 2128,
                y: 1822.34,
                name: 'Юго-Восточная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Юго-Восточная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '2289',
                cy: '1815',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 279,
        labels: [
            {
                x: 1061,
                y: 2095.34,
                name: 'Юго-Западная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Юго-Западная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: 1044,
                cy: 2086,
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 280,
        labels: [
            {
                x: 1581,
                y: 2201.34,
                name: 'Южная',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Южная',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1666',
                cy: '2196',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 281,
        labels: [
            {
                x: 1393,
                y: 2286.34,
                name: 'Ясенево',
                type:  'Shapes.Text'
            }
        ],
        stationName: 'Ясенево',
        markers: [
            {
                type: 'Shapes.Circle',
                cx: '1372',
                cy: '2281',
                r: '5',
                fill: '#f58220'
            }
        ]
    }
]


const stations = _stations.map(item => {
    const st = arr.find(s => s.stationName === item.stationName)
    const labels = [...st.labels.map(l => ({ ...l, type: 'Shapes.Text' })), st.bg]
    return ({ ...item, labels })
})



fs.writeFile("./stations.js", JSON.stringify(stations), function(err) {
    if(err) {
        console.log(err);
    }
    else {
        console.log("Output saved to /stations.js.");
    }
});

