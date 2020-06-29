const stations = [
    {
        id: 0,
        labels: [
            { x: 2046.65,
                y: 1437.34,
                type: 'Shapes.Text',
                name: 'Авиамоторная'
            },
            { x: 2038,
                y: 1418,
                type: 'Shapes.Rect',
                width: 154,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Авиамоторная',
        markers: [
            {
                cx: '2024',
                cy: '1451',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            },
            {
                cx: '2024',
                cy: '1416',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 1,
        labels: [
            { x: 1839.99,
                y: 1772.34,
                type: 'Shapes.Text',
                name: 'Автозаводская'
            },
            { x: 1831,
                y: 1753,
                type: 'Shapes.Rect',
                width: 160,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Автозаводская',
        markers: [
            {
                cx: '1847',
                cy: '1794',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            },
            {
                cx: '1887',
                cy: '1794',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 2,
        labels: [
            { x: 1337.38,
                y: 1961.34,
                type: 'Shapes.Text',
                name: 'Академическая'
            },
            { x: 1328,
                y: 1942,
                type: 'Shapes.Rect',
                width: 167,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Академическая',
        markers: [
            {
                cx: '1315',
                cy: '1949',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 3,
        labels: [
            { x: 1399.09,
                y: 1532.34,
                type: 'Shapes.Text',
                name: 'Александровский сад'
            },
            { x: 1386,
                y: 1513,
                type: 'Shapes.Rect',
                width: 233,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Александровский сад',
        markers: [
            {
                cx: '1371',
                cy: '1537',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 4,
        labels: [
            { x: 1697.31,
                y: 933.336,
                type: 'Shapes.Text',
                name: 'Алексеевская'
            },
            { x: 1689,
                y: 914,
                type: 'Shapes.Rect',
                width: 148,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Алексеевская',
        markers: [
            {
                cx: '1666',
                cy: '926',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 5,
        labels: [
            { x: 2363.04,
                y: 2327.34,
                type: 'Shapes.Text',
                name: 'Алма-Атинская'
            },
            { x: 2354,
                y: 2308,
                type: 'Shapes.Rect',
                width: 161,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Алма-Атинская',
        markers: [
            {
                cx: '2340',
                cy: '2321',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 6,
        labels: [
            { x: 1321.52,
                y: 555.336,
                type: 'Shapes.Text',
                name: 'Алтуфьево'
            },
            { x: 1315,
                y: 536,
                type: 'Shapes.Rect',
                width: 116,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Алтуфьево',
        markers: [
            {
                cx: '1298',
                cy: '545',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 7,
        labels: [
            { x: 2136.25,
                y: 1410.34,
                type: 'Shapes.Text',
                name: 'Андроновка'
            },
            { x: 2129,
                y: 1391,
                type: 'Shapes.Rect',
                width: 129,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Андроновка',
        markers: [
            {
                cx: '2111',
                cy: '1405',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 8,
        labels: [
            { x: 287.348,
                y: 655.336,
                type: 'Shapes.Text',
                name: 'Аникеевка'
            },
            { x: 281,
                y: 636,
                type: 'Shapes.Rect',
                width: 113,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Аникеевка',
        markers: [
            {
                cx: '414',
                cy: '649',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 9,
        labels: [
            { x: 1684.61,
                y: 2352.34,
                type: 'Shapes.Text',
                name: 'Аннино'
            },
            { x: 1680,
                y: 2333,
                type: 'Shapes.Rect',
                width: 82,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Аннино',
        markers: [
            {
                cx: '1666',
                cy: '2346',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 10,
        labels: [
            { x: 1239.18,
                y: 1531.34,
                type: 'Shapes.Text',
                name: 'Арбатская'
            },
            { x: 1233,
                y: 1512,
                type: 'Shapes.Rect',
                width: 110,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Арбатская',
        markers: [
            {
                cx: '1285',
                cy: '1478',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 11,
        labels: [
            { x: 1239.18,
                y: 1531.34,
                type: 'Shapes.Text',
                name: 'Арбатская'
            },
            { x: 1233,
                y: 1512,
                type: 'Shapes.Rect',
                width: 110,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Арбатская',
        markers: [
            {
                cx: '1352',
                cy: '1537',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 12,
        labels: [
            { x: 1122.62,
                y: 1048.34,
                type: 'Shapes.Text',
                name: 'Аэропорт'
            },
            { x: 1117,
                y: 1029,
                type: 'Shapes.Rect',
                width: 100,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Аэропорт',
        markers: [
            {
                cx: '1099',
                cy: '1046',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 13,
        labels: [
            { x: 1697.6,
                y: 604.336,
                type: 'Shapes.Text',
                name: 'Бабушкинская'
            },
            { x: 1689,
                y: 585,
                type: 'Shapes.Rect',
                width: 153,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Бабушкинская',
        markers: [
            {
                cx: '1666',
                cy: '597',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 14,
        labels: [
            { x: 571.393,
                y: 1541.34,
                type: 'Shapes.Text',
                name: 'Багратионовская'
            },
            { x: 561,
                y: 1522,
                type: 'Shapes.Rect',
                width: 185,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Багратионовская',
        markers: [
            {
                cx: '765',
                cy: '1530',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 15,
        labels: [
            { x: 313.056,
                y: 1142.34,
                type: 'Shapes.Text',
                name: 'Баковка'
            },
            { x: 308,
                y: 1123,
                type: 'Shapes.Rect',
                width: 90,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Баковка',
        markers: [
            {
                cx: '415',
                cy: '1135',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 16,
        labels: [
            { x: 1013.97,
                y: 897.336,
                type: 'Shapes.Text',
                name: 'Балтийская'
            },
            { x: 1007,
                y: 878,
                type: 'Shapes.Rect',
                width: 124,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Балтийская',
        markers: [
            {
                cx: '1017',
                cy: '915',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 17,
        labels: [
            { x: 1168.98,
                y: 1327.34,
                type: 'Shapes.Text',
                name: 'Баррикадная'
            },
            { x: 1161,
                y: 1308,
                type: 'Shapes.Rect',
                width: 142,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Баррикадная',
        markers: [
            {
                cx: '1161',
                cy: '1345',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 18,
        labels: [
            { x: 1824.19,
                y: 1313.34,
                type: 'Shapes.Text',
                name: 'Бауманская'
            },
            { x: 1817,
                y: 1294,
                type: 'Shapes.Rect',
                width: 128,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Бауманская',
        markers: [
            {
                cx: '1955',
                cy: '1321',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 19,
        labels: [
            { x: 1046,
                y: 1289.34,
                type: 'Shapes.Text',
                name: 'Беговая'
            },
            { x: 1041,
                y: 1270,
                type: 'Shapes.Rect',
                width: 89,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Беговая',
        markers: [
            {
                cx: '1024',
                cy: '1291',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            },
            {
                cx: '1042',
                cy: '1308',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 20,
        labels: [
            { x: 1857.71,
                y: 785.336,
                type: 'Shapes.Text',
                name: 'Белокаменная'
            },
            { x: 1849,
                y: 766,
                type: 'Shapes.Rect',
                width: 155,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Белокаменная',
        markers: [
            {
                cx: '1842',
                cy: '798',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 21,
        labels: [
            { x: 909.978,
                y: 724.336,
                type: 'Shapes.Text',
                name: 'Беломорская'
            },
            { x: 902,
                y: 705,
                type: 'Shapes.Rect',
                width: 142,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Беломорская',
        markers: [
            {
                cx: '890',
                cy: '715',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 22,
        labels: [
            { x: 1255.53,
                y: 1173.34,
                type: 'Shapes.Text',
                name: 'Белорусская'
            },
            { x: 1248,
                y: 1154,
                type: 'Shapes.Rect',
                width: 134,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Белорусская',
        markers: [
            {
                cx: '1247',
                cy: '1194',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            },
            {
                cx: '1232',
                cy: '1179',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#894e35'
            },
            {
                cx: '1217',
                cy: '1133',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 23,
        labels: [
            { x: 1333.11,
                y: 2153.34,
                type: 'Shapes.Text',
                name: 'Беляево'
            },
            { x: 1328,
                y: 2134,
                type: 'Shapes.Rect',
                width: 91,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Беляево',
        markers: [
            {
                cx: '1314',
                cy: '2146',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 24,
        labels: [
            { x: 1095.37,
                y: 606.336,
                type: 'Shapes.Text',
                name: 'Бескудниково'
            },
            { x: 1087,
                y: 587,
                type: 'Shapes.Rect',
                width: 149,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Бескудниково',
        markers: [
            {
                cx: '1260',
                cy: '599',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 25,
        labels: [
            { x: 1320.73,
                y: 602.336,
                type: 'Shapes.Text',
                name: 'Бибирево'
            },
            { x: 1315,
                y: 583,
                type: 'Shapes.Rect',
                width: 102,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Бибирево',
        markers: [
            {
                cx: '1298',
                cy: '595',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 26,
        labels: [
            { x: 1394.65,
                y: 1566.84,
                type: 'Shapes.Text',
                name: 'Библиотека'
            },
            { x: 1394.65,
                y: 1589.84,
                type: 'Shapes.Text',
                name: 'имени Ленина'
            },
            { x: 1386,
                y: 1547,
                type: 'Shapes.Rect',
                width: 154,
                height: 49,
                rx: 14
            }
        ],
        stationName: 'Библиотека имени Ленина',
        markers: [
            {
                cx: 1372,
                cy: 1558,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 27,
        labels: [
            { x: 1910.71,
                y: 2446.34,
                type: 'Shapes.Text',
                name: 'Битца'
            },
            { x: 1907,
                y: 2427,
                type: 'Shapes.Rect',
                width: 66,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Битца',
        markers: [
            {
                cx: '1891',
                cy: '2440',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 28,
        labels: [
            { x: 1240.28,
                y: 2354.34,
                type: 'Shapes.Text',
                name: 'Битцевский парк'
            },
            { x: 1230,
                y: 2335,
                type: 'Shapes.Rect',
                width: 183,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Битцевский парк',
        markers: [
            {
                cx: '1425',
                cy: '2337',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#acbfe3'
            }
        ]
    },
    {
        id: 29,
        labels: [
            { x: 2235.96,
                y: 2185.34,
                type: 'Shapes.Text',
                name: 'Борисово'
            },
            { x: 2230,
                y: 2166,
                type: 'Shapes.Rect',
                width: 106,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Борисово',
        markers: [
            {
                cx: '2216',
                cy: '2180',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 30,
        labels: [
            { x: 1231.19,
                y: 1590.34,
                type: 'Shapes.Text',
                name: 'Боровицкая'
            },
            { x: 1224,
                y: 1571,
                type: 'Shapes.Rect',
                width: 128,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Боровицкая',
        markers: [
            {
                cx: '1352',
                cy: '1558',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 31,
        labels: [
            { x: 782.337,
                y: 2102.34,
                type: 'Shapes.Text',
                name: 'Боровское шоссе'
            },
            { x: 772,
                y: 2083,
                type: 'Shapes.Rect',
                width: 184,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Боровское шоссе',
        markers: [
            {
                cx: '754',
                cy: '2096',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 32,
        labels: [
            { x: 1699.79,
                y: 698.336,
                type: 'Shapes.Text',
                name: 'Ботанический сад'
            },
            { x: 1689,
                y: 679,
                type: 'Shapes.Rect',
                width: 192,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Ботанический сад',
        markers: [
            {
                cx: '1666',
                cy: '691',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            },
            {
                cx: '1645',
                cy: '711',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 33,
        labels: [
            { x: 2239.16,
                y: 2066.34,
                type: 'Shapes.Text',
                name: 'Братиславская'
            },
            { x: 2230,
                y: 2047,
                type: 'Shapes.Rect',
                width: 163,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Братиславская',
        markers: [
            {
                cx: '2216',
                cy: '2060',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 34,
        labels: [
            { x: 1541.02,
                y: 2536.34,
                type: 'Shapes.Text',
                name: 'Бульвар'
            },
            { x: 1434.71,
                y: 2559.34,
                type: 'Shapes.Text',
                name: 'Адмирала Ушакова'
            },
            { x: 1420,
                y: 2518,
                type: 'Shapes.Rect',
                width: 208,
                height: 46,
                rx: 14
            }
        ],
        stationName: 'Бульвар Адмирала Ушакова',
        markers: [
            {
                cx: '1642',
                cy: '2535',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#acbfe3'
            }
        ]
    },
    {
        id: 35,
        labels: [
            { x: 1691.4,
                y: 2392.34,
                type: 'Shapes.Text',
                name: 'Бульвар'
            },
            { x: 1691.4,
                y: 2415.34,
                type: 'Shapes.Text',
                name: 'Дмитрия Донского'
            },
            { x: 1680,
                y: 2373,
                type: 'Shapes.Rect',
                width: 203,
                height: 48,
                rx: 14
            }
        ],
        stationName: 'Бульвар Дмитрия Донского',
        markers: [
            {
                cx: '1666',
                cy: '2397',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 36,
        labels: [
            { x: 1915.93,
                y: 828.836,
                type: 'Shapes.Text',
                name: 'Бульвар'
            },
            { x: 1915.93,
                y: 851.836,
                type: 'Shapes.Text',
                name: 'Рокоссовского'
            },
            { x: 1907,
                y: 810,
                type: 'Shapes.Rect',
                width: 159,
                height: 47,
                rx: 14
            }
        ],
        stationName: 'Бульвар Рокоссовского',
        markers: [
            {
                cx: 1886,
                cy: 869,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            },
            {
                cx: '1886',
                cy: '831',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 37,
        labels: [
            { x: 1523.03,
                y: 2665.34,
                type: 'Shapes.Text',
                name: 'Бунинская'
            },
            { x: 1564.95,
                y: 2688.34,
                type: 'Shapes.Text',
                name: 'Аллея'
            },
            { x: 1514,
                y: 2647,
                type: 'Shapes.Rect',
                width: 114,
                height: 46,
                rx: 14
            }
        ],
        stationName: 'Бунинская Аллея',
        markers: [
            {
                cx: '1643',
                cy: '2666',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#acbfe3'
            }
        ]
    },
    {
        id: 38,
        labels: [
            { x: 1911.16,
                y: 2506.34,
                type: 'Shapes.Text',
                name: 'Бутово'
            },
            { x: 1907,
                y: 2487,
                type: 'Shapes.Rect',
                width: 74,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Бутово',
        markers: [
            {
                cx: '1891',
                cy: '2500',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 39,
        labels: [
            { x: 1501.4,
                y: 911.336,
                type: 'Shapes.Text',
                name: 'Бутырская'
            },
            { x: 1495,
                y: 892,
                type: 'Shapes.Rect',
                width: 114,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Бутырская',
        markers: [
            {
                cx: '1479',
                cy: '909',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 40,
        labels: [
            { x: 1692.76,
                y: 833.336,
                type: 'Shapes.Text',
                name: 'ВДНХ'
            },
            { x: 1689,
                y: 814,
                type: 'Shapes.Rect',
                width: 67,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'ВДНХ',
        markers: [
            {
                cx: '1666',
                cy: '826',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 41,
        labels: [
            { x: 1806.42,
                y: 2128.34,
                type: 'Shapes.Text',
                name: 'Варшавская'
            },
            { x: 1799,
                y: 2109,
                type: 'Shapes.Rect',
                width: 132,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Варшавская',
        markers: [
            {
                cx: '1808',
                cy: '2096',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#6ac9c8'
            }
        ]
    },
    {
        id: 42,
        labels: [
            { x: 1698.11,
                y: 1848.34,
                type: 'Shapes.Text',
                name: 'Верхние'
            },
            { x: 1698.11,
                y: 1871.34,
                type: 'Shapes.Text',
                name: 'Котлы'
            },
            { x: 1693,
                y: 1829,
                type: 'Shapes.Rect',
                width: 91,
                height: 48,
                rx: 14
            }
        ],
        stationName: 'Верхние Котлы',
        markers: [
            {
                cx: '1714',
                cy: '1893',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 43,
        labels: [
            { x: 1037.44,
                y: 673.336,
                type: 'Shapes.Text',
                name: 'Верхние'
            },
            { x: 1019.14,
                y: 696.336,
                type: 'Shapes.Text',
                name: 'Лихоборы'
            },
            { x: 1013,
                y: 654,
                type: 'Shapes.Rect',
                width: 107,
                height: 48,
                rx: 14
            }
        ],
        stationName: 'Верхние Лихоборы',
        markers: [
            {
                cx: '1130',
                cy: '670',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 44,
        labels: [
            { x: 1321.8,
                y: 720.336,
                type: 'Shapes.Text',
                name: 'Владыкино'
            },
            { x: 1315,
                y: 701,
                type: 'Shapes.Rect',
                width: 121,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Владыкино',
        markers: [
            {
                cx: '1298',
                cy: '706',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            },
            {
                cx: '1298',
                cy: '725',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 45,
        labels: [
            { x: 1152.22,
                y: 356.336,
                type: 'Shapes.Text',
                name: 'Водники'
            },
            { x: 1147,
                y: 337,
                type: 'Shapes.Rect',
                width: 93,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Водники',
        markers: [
            {
                cx: '1260',
                cy: '349',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 46,
        labels: [
            { x: 912.775,
                y: 810.336,
                type: 'Shapes.Text',
                name: 'Водный стадион'
            },
            { x: 903,
                y: 791,
                type: 'Shapes.Rect',
                width: 174,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Водный стадион',
        markers: [
            {
                cx: '890',
                cy: '805',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 47,
        labels: [
            { x: 832.303,
                y: 899.336,
                type: 'Shapes.Text',
                name: 'Войковская'
            },
            { x: 825,
                y: 880,
                type: 'Shapes.Rect',
                width: 130,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Войковская',
        markers: [
            {
                cx: '967',
                cy: '915',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 48,
        labels: [
            { x: 1960.17,
                y: 1674.34,
                type: 'Shapes.Text',
                name: 'Волгоградский'
            },
            { x: 2014.78,
                y: 1697.34,
                type: 'Shapes.Text',
                name: 'проспект'
            },
            { x: 1950,
                y: 1655,
                type: 'Shapes.Rect',
                width: 160,
                height: 48,
                rx: 14
            }
        ],
        stationName: 'Волгоградский проспект',
        markers: [
            {
                cx: '2059',
                cy: '1641',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 49,
        labels: [
            { x: 2200.01,
                y: 1936.34,
                type: 'Shapes.Text',
                name: 'Волжская'
            },
            { x: 2194,
                y: 1917,
                type: 'Shapes.Rect',
                width: 107,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Волжская',
        markers: [
            {
                cx: '2176',
                cy: '1930',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 50,
        labels: [
            { x: 393.438,
                y: 948.336,
                type: 'Shapes.Text',
                name: 'Волоколамская'
            },
            { x: 384,
                y: 929,
                type: 'Shapes.Rect',
                width: 168,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Волоколамская',
        markers: [
            {
                cx: '569',
                cy: '941',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            },
            {
                cx: '544',
                cy: '967',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 51,
        labels: [
            { x: 1099.83,
                y: 1869.34,
                type: 'Shapes.Text',
                name: 'Воробьёвы горы'
            },
            { x: 1090,
                y: 1850,
                type: 'Shapes.Rect',
                width: 175,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Воробьёвы горы',
        markers: [
            {
                cx: 1068,
                cy: 1859,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 52,
        labels: [
            { x: 994.034,
                y: 1470.34,
                type: 'Shapes.Text',
                name: 'Выставочная'
            },
            { x: 986,
                y: 1451,
                type: 'Shapes.Rect',
                width: 143,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Выставочная',
        markers: [
            {
                cx: '967',
                cy: '1458',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 53,
        labels: [
            { x: 2376.72,
                y: 1814.34,
                type: 'Shapes.Text',
                name: 'Выхино'
            },
            { x: 2372,
                y: 1795,
                type: 'Shapes.Rect',
                width: 84,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Выхино',
        markers: [
            {
                cx: '2354',
                cy: '1816',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 54,
        labels: [
            { x: 777.618,
                y: 2002.34,
                type: 'Shapes.Text',
                name: 'Говорово'
            },
            { x: 772,
                y: 1983,
                type: 'Shapes.Rect',
                width: 100,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Говорово',
        markers: [
            {
                cx: '754',
                cy: '1996',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 55,
        labels: [
            { x: 1155.87,
                y: 947.336,
                type: 'Shapes.Text',
                name: 'Гражданская'
            },
            { x: 1148,
                y: 928,
                type: 'Shapes.Rect',
                width: 140,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Гражданская',
        markers: [
            {
                cx: '1216',
                cy: '966',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 56,
        labels: [
            { x: 1140.67,
                y: 655.336,
                type: 'Shapes.Text',
                name: 'Дегунино'
            },
            { x: 1135,
                y: 636,
                type: 'Shapes.Rect',
                width: 101,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Дегунино',
        markers: [
            {
                cx: '1260',
                cy: '648',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 57,
        labels: [
            { x: 739.989,
                y: 1419.34,
                type: 'Shapes.Text',
                name: 'Деловой центр'
            },
            { x: 731,
                y: 1400,
                type: 'Shapes.Rect',
                width: 160,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Деловой центр',
        markers: [
            {
                cx: '877',
                cy: '1383',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 58,
        labels: [
            { x: 739.989,
                y: 1419.34,
                type: 'Shapes.Text',
                name: 'Деловой центр'
            },
            { x: 731,
                y: 1400,
                type: 'Shapes.Rect',
                width: 160,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Деловой центр',
        markers: [
            {
                cx: '967',
                cy: '1438',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#6ac9c8'
            }
        ]
    },
    {
        id: 59,
        labels: [
            { x: 2062.2,
                y: 2007.34,
                type: 'Shapes.Text',
                name: 'Депо'
            },
            { x: 2059,
                y: 1988,
                type: 'Shapes.Rect',
                width: 57,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Депо',
        markers: [
            {
                cx: '2130',
                cy: '2001',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 60,
        labels: [
            { x: 1159.78,
                y: 1088.34,
                type: 'Shapes.Text',
                name: 'Динамо'
            },
            { x: 1155,
                y: 1069,
                type: 'Shapes.Rect',
                width: 85,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Динамо',
        markers: [
            {
                cx: '1138',
                cy: '1085',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 61,
        labels: [
            { x: 1323.09,
                y: 946.336,
                type: 'Shapes.Text',
                name: 'Дмитровская'
            },
            { x: 1315,
                y: 927,
                type: 'Shapes.Rect',
                width: 144,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Дмитровская',
        markers: [
            {
                cx: '1298',
                cy: '939',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            },
            {
                cx: '1324',
                cy: '966',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 62,
        labels: [
            { x: 1602.93,
                y: 1799.34,
                type: 'Shapes.Text',
                name: 'Добрынинская'
            },
            { x: 1594,
                y: 1780,
                type: 'Shapes.Rect',
                width: 159,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Добрынинская',
        markers: [
            {
                cx: '1581',
                cy: '1788',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#894e35'
            }
        ]
    },
    {
        id: 63,
        labels: [
            { x: 1097.48,
                y: 408.336,
                type: 'Shapes.Text',
                name: 'Долгопрудная'
            },
            { x: 1089,
                y: 389,
                type: 'Shapes.Rect',
                width: 151,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Долгопрудная',
        markers: [
            {
                cx: '1260',
                cy: '399',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 64,
        labels: [
            { x: 2034.66,
                y: 2349.34,
                type: 'Shapes.Text',
                name: 'Домодедовская'
            },
            { x: 2025,
                y: 2330,
                type: 'Shapes.Rect',
                width: 172,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Домодедовская',
        markers: [
            {
                cx: '2113',
                cy: '2321',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 65,
        labels: [
            { x: 1438.87,
                y: 1035.34,
                type: 'Shapes.Text',
                name: 'Достоевская'
            },
            { x: 1431,
                y: 1016,
                type: 'Shapes.Rect',
                width: 140,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Достоевская',
        markers: [
            {
                cx: '1501',
                cy: '1053',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 66,
        labels: [
            { x: 1837.73,
                y: 1727.34,
                type: 'Shapes.Text',
                name: 'Дубровка'
            },
            { x: 1832,
                y: 1708,
                type: 'Shapes.Rect',
                width: 102,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Дубровка',
        markers: [
            {
                cx: '1945',
                cy: '1700',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            },
            {
                cx: '1945',
                cy: '1740',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 67,
        labels: [
            { x: 2403.96,
                y: 1967.34,
                type: 'Shapes.Text',
                name: 'Жулебино'
            },
            { x: 2398,
                y: 1948,
                type: 'Shapes.Rect',
                width: 106,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Жулебино',
        markers: [
            {
                cx: '2380',
                cy: '1962',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 68,
        labels: [
            { x: 1809.7,
                y: 1882.34,
                type: 'Shapes.Text',
                name: 'ЗИЛ'
            },
            { x: 1807,
                y: 1863,
                type: 'Shapes.Rect',
                width: 48,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'ЗИЛ',
        markers: [
            {
                cx: '1804',
                cy: '1854',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 69,
        labels: [
            { x: 923.596,
                y: 1141.34,
                type: 'Shapes.Text',
                name: 'Зорге'
            },
            { x: 920,
                y: 1122,
                type: 'Shapes.Rect',
                width: 64,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Зорге',
        markers: [
            {
                cx: '905',
                cy: '1119',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 70,
        labels: [
            { x: 2236.52,
                y: 2302.34,
                type: 'Shapes.Text',
                name: 'Зябликово'
            },
            { x: 2230,
                y: 2283,
                type: 'Shapes.Rect',
                width: 116,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Зябликово',
        markers: [
            {
                cx: '2217',
                cy: '2296',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 71,
        labels: [
            { x: 1963.8,
                y: 1158.34,
                type: 'Shapes.Text',
                name: 'Измайлово'
            },
            { x: 1957,
                y: 1139,
                type: 'Shapes.Rect',
                width: 121,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Измайлово',
        markers: [
            {
                cx: '2094',
                cy: '1150',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 72,
        labels: [
            { x: 2217.71,
                y: 1096.34,
                type: 'Shapes.Text',
                name: 'Измайловская'
            },
            { x: 2209,
                y: 1077,
                type: 'Shapes.Rect',
                width: 155,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Измайловская',
        markers: [
            {
                cx: '2190',
                cy: '1089',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 73,
        labels: [
            { x: 1800.37,
                y: 1144.34,
                type: 'Shapes.Text',
                name: 'Каланчёвская'
            },
            { x: 1792,
                y: 1125,
                type: 'Shapes.Rect',
                width: 149,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Каланчёвская',
        markers: [
            {
                cx: '1804',
                cy: '1161',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 74,
        labels: [
            { x: 2056.52,
                y: 1553.34,
                type: 'Shapes.Text',
                name: 'Калитники'
            },
            { x: 2050,
                y: 1534,
                type: 'Shapes.Rect',
                width: 116,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Калитники',
        markers: [
            {
                cx: '2036',
                cy: '1542',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 75,
        labels: [
            { x: 1334.52,
                y: 2102.34,
                type: 'Shapes.Text',
                name: 'Калужская'
            },
            { x: 1328,
                y: 2083,
                type: 'Shapes.Rect',
                width: 116,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Калужская',
        markers: [
            {
                cx: '1314',
                cy: '2096',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 76,
        labels: [
            { x: 1739.94,
                y: 2168.34,
                type: 'Shapes.Text',
                name: 'Кантемировская'
            },
            { x: 1730,
                y: 2149,
                type: 'Shapes.Rect',
                width: 177,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Кантемировская',
        markers: [
            {
                cx: '1917',
                cy: '2144',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 77,
        labels: [
            { x: 1684.46,
                y: 2128.34,
                type: 'Shapes.Text',
                name: 'Каховская'
            },
            { x: 1678,
                y: 2109,
                type: 'Shapes.Rect',
                width: 115,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Каховская',
        markers: [
            {
                cx: '1690',
                cy: '2096',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#6ac9c8'
            }
        ]
    },
    {
        id: 78,
        labels: [
            { x: 1911.74,
                y: 2048.34,
                type: 'Shapes.Text',
                name: 'Каширская'
            },
            { x: 1905,
                y: 2029,
                type: 'Shapes.Rect',
                width: 120,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Каширская',
        markers: [
            {
                cx: '1892',
                cy: '2042',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            },
            {
                cx: '1874',
                cy: '2060',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#6ac9c8'
            }
        ]
    },
    {
        id: 79,
        labels: [
            { x: 1012.73,
                y: 1528.34,
                type: 'Shapes.Text',
                name: 'Киевская'
            },
            { x: 1007,
                y: 1509,
                type: 'Shapes.Rect',
                width: 102,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Киевская',
        markers: [
            {
                cx: '1124',
                cy: '1534',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            },
            {
                cx: '1124',
                cy: '1514',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#00c1f3'
            },
            {
                cx: '1140',
                cy: '1525',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#894e35'
            }
        ]
    },
    {
        id: 80,
        labels: [
            { x: 1686.42,
                y: 1431.34,
                type: 'Shapes.Text',
                name: 'Китай-город'
            },
            { x: 1679,
                y: 1412,
                type: 'Shapes.Rect',
                width: 132,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Китай-город',
        markers: [
            {
                cx: '1666',
                cy: '1406',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            },
            {
                cx: '1666',
                cy: '1426',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 81,
        labels: [
            { x: 2044.92,
                y: 1778.34,
                type: 'Shapes.Text',
                name: 'Кожуховская'
            },
            { x: 2037,
                y: 1759,
                type: 'Shapes.Rect',
                width: 141,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Кожуховская',
        markers: [
            {
                cx: '2020',
                cy: '1774',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 82,
        labels: [
            { x: 1913.03,
                y: 1966.34,
                type: 'Shapes.Text',
                name: 'Коломенская'
            },
            { x: 1905,
                y: 1947,
                type: 'Shapes.Rect',
                width: 143,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Коломенская',
        markers: [
            {
                cx: '1891',
                cy: '1952',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 83,
        labels: [
            { x: 1240.53,
                y: 2512.34,
                type: 'Shapes.Text',
                name: 'Коммунарка'
            },
            { x: 1233,
                y: 2493,
                type: 'Shapes.Rect',
                width: 134,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Коммунарка',
        markers: [
            {
                cx: 1216,
                cy: 2507,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 84,
        labels: [
            { x: 1784.61,
                y: 1190.34,
                type: 'Shapes.Text',
                name: 'Комсомольская'
            },
            { x: 1775,
                y: 1171,
                type: 'Shapes.Rect',
                width: 171,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Комсомольская',
        markers: [
            {
                cx: 1737,
                cy: 1193,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            },
            {
                cx: '1752',
                cy: '1178',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#894e35'
            }
        ]
    },
    {
        id: 85,
        labels: [
            { x: 1333.73,
                y: 2202.34,
                type: 'Shapes.Text',
                name: 'Коньково'
            },
            { x: 1328,
                y: 2183,
                type: 'Shapes.Rect',
                width: 102,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Коньково',
        markers: [
            {
                cx: '1314',
                cy: '2196',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 86,
        labels: [
            { x: 1088.94,
                y: 869.336,
                type: 'Shapes.Text',
                name: 'Коптево'
            },
            { x: 1084,
                y: 850,
                type: 'Shapes.Rect',
                width: 88,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Коптево',
        markers: [
            {
                cx: '1069',
                cy: '862',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 87,
        labels: [
            { x: 2402.44,
                y: 1908.34,
                type: 'Shapes.Text',
                name: 'Косино'
            },
            { x: 2398,
                y: 1889,
                type: 'Shapes.Rect',
                width: 79,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Косино',
        markers: [
            {
                cx: '2380',
                cy: '1888',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 88,
        labels: [
            { x: 2405.13,
                y: 2034.34,
                type: 'Shapes.Text',
                name: 'Котельники'
            },
            { x: 2398,
                y: 2015,
                type: 'Shapes.Rect',
                width: 127,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Котельники',
        markers: [
            {
                cx: '2381',
                cy: '2028',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 89,
        labels: [
            { x: 2214.74,
                y: 2359.34,
                type: 'Shapes.Text',
                name: 'Красногвардейская'
            },
            { x: 2203,
                y: 2340,
                type: 'Shapes.Rect',
                width: 209,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Красногвардейская',
        markers: [
            {
                cx: '2217',
                cy: '2321',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 90,
        labels: [
            { x: 243.933,
                y: 758.336,
                type: 'Shapes.Text',
                name: 'Красногорская'
            },
            { x: 235,
                y: 739,
                type: 'Shapes.Rect',
                width: 159,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Красногорская',
        markers: [
            {
                cx: '413',
                cy: '751',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 91,
        labels: [
            { x: 1113.85,
                y: 1381.34,
                type: 'Shapes.Text',
                name: 'Краснопресненская'
            },
            { x: 1102,
                y: 1362,
                type: 'Shapes.Rect',
                width: 211,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Краснопресненская',
        markers: [
            {
                cx: '1141',
                cy: '1345',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#894e35'
            }
        ]
    },
    {
        id: 92,
        labels: [
            { x: 1862.89,
                y: 1110.34,
                type: 'Shapes.Text',
                name: 'Красносельская'
            },
            { x: 1853,
                y: 1091,
                type: 'Shapes.Rect',
                width: 176,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Красносельская',
        markers: [
            {
                cx: 1831,
                cy: 1099,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 93,
        labels: [
            { x: 1722.66,
                y: 1240.34,
                type: 'Shapes.Text',
                name: 'Красные Ворота'
            },
            { x: 1713,
                y: 1221,
                type: 'Shapes.Rect',
                width: 172,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Красные Ворота',
        markers: [
            {
                cx: 1700,
                cy: 1232,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 94,
        labels: [
            { x: 1053.45,
                y: 925.336,
                type: 'Shapes.Text',
                name: 'Красный'
            },
            { x: 1053.45,
                y: 948.336,
                type: 'Shapes.Text',
                name: 'Балтиец'
            },
            { x: 1048,
                y: 907,
                type: 'Shapes.Rect',
                width: 97,
                height: 46,
                rx: 14
            }
        ],
        stationName: 'Красный Балтиец',
        markers: [
            {
                cx: '1100',
                cy: '966',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 95,
        labels: [
            { x: 1914.08,
                y: 2374.84,
                type: 'Shapes.Text',
                name: 'Красный'
            },
            { x: 1914.08,
                y: 2397.84,
                type: 'Shapes.Text',
                name: 'Строитель'
            },
            { x: 1907,
                y: 2358,
                type: 'Shapes.Rect',
                width: 126,
                height: 43,
                rx: 14
            }
        ],
        stationName: 'Красный Строитель',
        markers: [
            {
                cx: '1891',
                cy: '2380',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 96,
        labels: [
            { x: 1924.31,
                y: 1579.84,
                type: 'Shapes.Text',
                name: 'Крестьянская'
            },
            { x: 1924.31,
                y: 1602.84,
                type: 'Shapes.Text',
                name: 'Застава'
            },
            { x: 1916,
                y: 1564,
                type: 'Shapes.Rect',
                width: 148,
                height: 41,
                rx: 14
            }
        ],
        stationName: 'Крестьянская Застава',
        markers: [
            {
                cx: '1935',
                cy: '1618',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 97,
        labels: [
            { x: 1328.04,
                y: 1640.34,
                type: 'Shapes.Text',
                name: 'Кропоткинская'
            },
            { x: 1319,
                y: 1621,
                type: 'Shapes.Rect',
                width: 161,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Кропоткинская',
        markers: [
            {
                cx: 1301,
                cy: 1629,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 98,
        labels: [
            { x: 599.135,
                y: 1183.34,
                type: 'Shapes.Text',
                name: 'Крылатское'
            },
            { x: 592,
                y: 1164,
                type: 'Shapes.Rect',
                width: 127,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Крылатское',
        markers: [
            {
                cx: '569',
                cy: '1176',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 99,
        labels: [
            { x: 1525.24,
                y: 1970.34,
                type: 'Shapes.Text',
                name: 'Крымская'
            },
            { x: 1519,
                y: 1951,
                type: 'Shapes.Rect',
                width: 111,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Крымская',
        markers: [
            {
                cx: '1541',
                cy: '1935',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 100,
        labels: [
            { x: 2012.18,
                y: 1936.34,
                type: 'Shapes.Text',
                name: 'Кубанская'
            },
            { x: 2006,
                y: 1917,
                type: 'Shapes.Rect',
                width: 110,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Кубанская',
        markers: [
            {
                cx: '2130',
                cy: '1934',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 101,
        labels: [
            { x: 1432.66,
                y: 1331.34,
                type: 'Shapes.Text',
                name: 'Кузнецкий Мост'
            },
            { x: 1423,
                y: 1312,
                type: 'Shapes.Rect',
                width: 172,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Кузнецкий Мост',
        markers: [
            {
                cx: '1587',
                cy: '1345',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 102,
        labels: [
            { x: 2128.57,
                y: 1725.34,
                type: 'Shapes.Text',
                name: 'Кузьминки'
            },
            { x: 2122,
                y: 1706,
                type: 'Shapes.Rect',
                width: 117,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Кузьминки',
        markers: [
            {
                cx: '2232',
                cy: '1697',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 103,
        labels: [
            { x: 596.022,
                y: 1343.34,
                type: 'Shapes.Text',
                name: 'Кунцевская'
            },
            { x: 589,
                y: 1324,
                type: 'Shapes.Rect',
                width: 125,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Кунцевская',
        markers: [
            {
                cx: '569',
                cy: '1361',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            },
            {
                cx: '594',
                cy: '1361',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#00c1f3'
            },
            {
                cx: '544',
                cy: '1386',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 104,
        labels: [
            { x: 1884.06,
                y: 1372.34,
                type: 'Shapes.Text',
                name: 'Курская'
            },
            { x: 1879,
                y: 1353,
                type: 'Shapes.Rect',
                width: 90,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Курская',
        markers: [
            {
                cx: '1876',
                cy: '1405',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            },
            {
                cx: '1856',
                cy: '1384',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#894e35'
            },
            {
                cx: '1876',
                cy: '1384',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 105,
        labels: [
            { x: 947.416,
                y: 1625.34,
                type: 'Shapes.Text',
                name: 'Кутузовская'
            },
            { x: 940,
                y: 1606,
                type: 'Shapes.Rect',
                width: 132,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Кутузовская',
        markers: [
            {
                cx: '924',
                cy: '1611',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#00c1f3'
            },
            {
                cx: '941',
                cy: '1594',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 106,
        labels: [
            { x: 1345.42,
                y: 1888.34,
                type: 'Shapes.Text',
                name: 'Ленинский проспект'
            },
            { x: 1333,
                y: 1869,
                type: 'Shapes.Rect',
                width: 221,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Ленинский проспект',
        markers: [
            {
                cx: '1314',
                cy: '1888',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 107,
        labels: [
            { x: 2407.55,
                y: 1850.34,
                type: 'Shapes.Text',
                name: 'Лермонтовский'
            },
            { x: 2407.55,
                y: 1873.34,
                type: 'Shapes.Text',
                name: 'проспект'
            },
            { x: 2398,
                y: 1834,
                type: 'Shapes.Rect',
                width: 170,
                height: 42,
                rx: 14
            }
        ],
        stationName: 'Лермонтовский проспект',
        markers: [
            {
                cx: '2380',
                cy: '1864',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 108,
        labels: [
            { x: 1481.71,
                y: 2368.34,
                type: 'Shapes.Text',
                name: 'Лесопарковая'
            },
            { x: 1473,
                y: 2349,
                type: 'Shapes.Rect',
                width: 155,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Лесопарковая',
        markers: [
            {
                cx: '1554',
                cy: '2337',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#acbfe3'
            }
        ]
    },
    {
        id: 109,
        labels: [
            { x: 2014.63,
                y: 1366.34,
                type: 'Shapes.Text',
                name: 'Лефортово'
            },
            { x: 2008,
                y: 1347,
                type: 'Shapes.Rect',
                width: 118,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Лефортово',
        markers: [
            {
                cx: '1994',
                cy: '1358',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 110,
        labels: [
            { x: 1124.63,
                y: 555.336,
                type: 'Shapes.Text',
                name: 'Лианозово'
            },
            { x: 1118,
                y: 536,
                type: 'Shapes.Rect',
                width: 118,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Лианозово',
        markers: [
            {
                cx: '1260',
                cy: '550',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 111,
        labels: [
            { x: 1154.01,
                y: 827.336,
                type: 'Shapes.Text',
                name: 'Лихоборы'
            },
            { x: 1148,
                y: 808,
                type: 'Shapes.Rect',
                width: 107,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Лихоборы',
        markers: [
            {
                cx: '1136',
                cy: '808',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 112,
        labels: [
            { x: 1175.82,
                y: 204.336,
                type: 'Shapes.Text',
                name: 'Лобня'
            },
            { x: 1172,
                y: 185,
                type: 'Shapes.Rect',
                width: 68,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Лобня',
        markers: [
            {
                cx: '1260',
                cy: '197',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 113,
        labels: [
            { x: 1999.74,
                y: 922.336,
                type: 'Shapes.Text',
                name: 'Локомотив'
            },
            { x: 1993,
                y: 903,
                type: 'Shapes.Rect',
                width: 120,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Локомотив',
        markers: [
            {
                cx: '1971',
                cy: '914',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 114,
        labels: [
            { x: 781.663,
                y: 1791.34,
                type: 'Shapes.Text',
                name: 'Ломоносовский'
            },
            { x: 781.663,
                y: 1814.34,
                type: 'Shapes.Text',
                name: 'проспект'
            },
            { x: 772,
                y: 1773,
                type: 'Shapes.Rect',
                width: 172,
                height: 46,
                rx: 14
            }
        ],
        stationName: 'Ломоносовский проспект',
        markers: [
            {
                cx: '754',
                cy: '1796',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 115,
        labels: [
            { x: 1599.11,
                y: 1370.34,
                type: 'Shapes.Text',
                name: 'Лубянка'
            },
            { x: 1594,
                y: 1351,
                type: 'Shapes.Rect',
                width: 91,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Лубянка',
        markers: [
            {
                cx: 1572,
                cy: 1359,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 116,
        labels: [
            { x: 1159.39,
                y: 1839.34,
                type: 'Shapes.Text',
                name: 'Лужники'
            },
            { x: 1154,
                y: 1820,
                type: 'Shapes.Rect',
                width: 96,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Лужники',
        markers: [
            {
                cx: '1137',
                cy: '1820',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 117,
        labels: [
            { x: 2586.6,
                y: 1984.34,
                type: 'Shapes.Text',
                name: 'Лухмановская'
            },
            { x: 2578,
                y: 1965,
                type: 'Shapes.Rect',
                width: 153,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Лухмановская',
        markers: [
            {
                cx: '2561',
                cy: '1978',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 118,
        labels: [
            { x: 2235.56,
                y: 2005.34,
                type: 'Shapes.Text',
                name: 'Люблино'
            },
            { x: 2230,
                y: 1986,
                type: 'Shapes.Rect',
                width: 99,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Люблино',
        markers: [
            {
                cx: '2216',
                cy: '1999',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 119,
        labels: [
            { x: 1178.43,
                y: 508.336,
                type: 'Shapes.Text',
                name: 'Марк'
            },
            { x: 1175,
                y: 489,
                type: 'Shapes.Rect',
                width: 61,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Марк',
        markers: [
            {
                cx: '1260',
                cy: '501',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 120,
        labels: [
            { x: 1696.43,
                y: 1646.34,
                type: 'Shapes.Text',
                name: 'Марксистская'
            },
            { x: 1688,
                y: 1627,
                type: 'Shapes.Rect',
                width: 150,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Марксистская',
        markers: [
            {
                cx: '1824',
                cy: '1615',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 121,
        labels: [
            { x: 1525.82,
                y: 998.336,
                type: 'Shapes.Text',
                name: 'Марьина Роща'
            },
            { x: 1517,
                y: 979,
                type: 'Shapes.Rect',
                width: 157,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Марьина Роща',
        markers: [
            {
                cx: '1500',
                cy: '991',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 122,
        labels: [
            { x: 2235.56,
                y: 2126.34,
                type: 'Shapes.Text',
                name: 'Марьино'
            },
            { x: 2230,
                y: 2107,
                type: 'Shapes.Rect',
                width: 99,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Марьино',
        markers: [
            {
                cx: '2216',
                cy: '2120',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 123,
        labels: [
            { x: 1322.25,
                y: 1247.34,
                type: 'Shapes.Text',
                name: 'Маяковская'
            },
            { x: 1315,
                y: 1228,
                type: 'Shapes.Rect',
                width: 129,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Маяковская',
        markers: [
            {
                cx: '1298',
                cy: '1247',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 124,
        labels: [
            { x: 1696.47,
                y: 558.336,
                type: 'Shapes.Text',
                name: 'Медведково'
            },
            { x: 1689,
                y: 539,
                type: 'Shapes.Rect',
                width: 133,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Медведково',
        markers: [
            {
                cx: '1666',
                cy: '551',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 125,
        labels: [
            { x: 738.719,
                y: 1361.34,
                type: 'Shapes.Text',
                name: 'Международная'
            },
            { x: 729,
                y: 1342,
                type: 'Shapes.Rect',
                width: 173,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Международная',
        markers: [
            {
                cx: '857',
                cy: '1383',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 126,
        labels: [
            { x: 1312.38,
                y: 1129.34,
                type: 'Shapes.Text',
                name: 'Менделеевская'
            },
            { x: 1303,
                y: 1110,
                type: 'Shapes.Rect',
                width: 167,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Менделеевская',
        markers: [
            {
                cx: '1403',
                cy: '1098',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 127,
        labels: [
            { x: 774.337,
                y: 1729.34,
                type: 'Shapes.Text',
                name: 'Минская'
            },
            { x: 769,
                y: 1710,
                type: 'Shapes.Rect',
                width: 95,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Минская',
        markers: [
            {
                cx: '764',
                cy: '1700',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 128,
        labels: [
            { x: 475.719,
                y: 853.336,
                type: 'Shapes.Text',
                name: 'Митино'
            },
            { x: 471,
                y: 834,
                type: 'Shapes.Rect',
                width: 84,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Митино',
        markers: [
            {
                cx: '569',
                cy: '846',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 129,
        labels: [
            { x: 785.596,
                y: 1902.34,
                type: 'Shapes.Text',
                name: 'Мичуринскийпроспект'
            },
            { x: 772,
                y: 1883,
                type: 'Shapes.Rect',
                width: 242,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Мичуринскийпроспект',
        markers: [
            {
                cx: '754',
                cy: '1896',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 130,
        labels: [
            { x: 599.809,
                y: 1253.34,
                type: 'Shapes.Text',
                name: 'Молодёжная'
            },
            { x: 592,
                y: 1234,
                type: 'Shapes.Rect',
                width: 139,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Молодёжная',
        markers: [
            {
                cx: '569',
                cy: '1246',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 131,
        labels: [
            { x: 1784.56,
                y: 1476.34,
                type: 'Shapes.Text',
                name: 'Москва-Товарная'
            },
            { x: 1774,
                y: 1457,
                type: 'Shapes.Rect',
                width: 188,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Москва-Товарная',
        markers: [
            {
                cx: '1974',
                cy: '1481',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 132,
        labels: [
            { x: 1979.03,
                y: 2185.34,
                type: 'Shapes.Text',
                name: 'Москворечье'
            },
            { x: 1971,
                y: 2166,
                type: 'Shapes.Rect',
                width: 143,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Москворечье',
        markers: [
            {
                cx: '2130',
                cy: '2179',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 133,
        labels: [
            { x: 598.124,
                y: 1043.34,
                type: 'Shapes.Text',
                name: 'Мякинино'
            },
            { x: 592,
                y: 1024,
                type: 'Shapes.Rect',
                width: 109,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Мякинино',
        markers: [
            {
                cx: '569',
                cy: '1036',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 134,
        labels: [
            { x: 1690.58,
                y: 1946.34,
                type: 'Shapes.Text',
                name: 'Нагатинская'
            },
            { x: 1683,
                y: 1927,
                type: 'Shapes.Rect',
                width: 135,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Нагатинская',
        markers: [
            {
                cx: '1666',
                cy: '1940',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 135,
        labels: [
            { x: 1688.79,
                y: 2003.34,
                type: 'Shapes.Text',
                name: 'Нагорная'
            },
            { x: 1683,
                y: 1984,
                type: 'Shapes.Rect',
                width: 103,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Нагорная',
        markers: [
            {
                cx: '1666',
                cy: '1997',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 136,
        labels: [
            { x: 297.73,
                y: 602.336,
                type: 'Shapes.Text',
                name: 'Нахабино'
            },
            { x: 292,
                y: 583,
                type: 'Shapes.Rect',
                width: 102,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Нахабино',
        markers: [
            {
                cx: '414',
                cy: '595',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 137,
        labels: [
            { x: 1512.85,
                y: 2039.84,
                type: 'Shapes.Text',
                name: 'Нахимовский'
            },
            { x: 1554.28,
                y: 2062.84,
                type: 'Shapes.Text',
                name: 'проспект'
            },
            { x: 1503,
                y: 2022,
                type: 'Shapes.Rect',
                width: 145,
                height: 45,
                rx: 14
            }
        ],
        stationName: 'Нахимовский проспект',
        markers: [
            {
                cx: '1666',
                cy: '2045',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 138,
        labels: [
            { x: 2585.13,
                y: 2040.34,
                type: 'Shapes.Text',
                name: 'Некрасовка'
            },
            { x: 2578,
                y: 2021,
                type: 'Shapes.Rect',
                width: 127,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Некрасовка',
        markers: [
            {
                cx: '2562',
                cy: '2034',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 139,
        labels: [
            { x: 273.416,
                y: 1241.34,
                type: 'Shapes.Text',
                name: 'Немчиновка'
            },
            { x: 266,
                y: 1222,
                type: 'Shapes.Rect',
                width: 132,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Немчиновка',
        markers: [
            {
                cx: '416',
                cy: '1234',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 140,
        labels: [
            { x: 2120.27,
                y: 1485.34,
                type: 'Shapes.Text',
                name: 'Нижегородская'
            },
            { x: 2111,
                y: 1466,
                type: 'Shapes.Rect',
                width: 165,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Нижегородская',
        markers: [
            {
                cx: '2097',
                cy: '1489',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#e66ac0'
            },
            {
                cx: '2097',
                cy: '1466',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 141,
        labels: [
            { x: 2307.75,
                y: 1362.34,
                type: 'Shapes.Text',
                name: 'Новогиреево'
            },
            { x: 2300,
                y: 1343,
                type: 'Shapes.Rect',
                width: 138,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Новогиреево',
        markers: [
            {
                cx: '2362',
                cy: '1325',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 142,
        labels: [
            { x: 1118.25,
                y: 456.336,
                type: 'Shapes.Text',
                name: 'Новодачная'
            },
            { x: 1111,
                y: 437,
                type: 'Shapes.Rect',
                width: 129,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Новодачная',
        markers: [
            {
                cx: '1260',
                cy: '449',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 143,
        labels: [
            { x: 2398.3,
                y: 1304.34,
                type: 'Shapes.Text',
                name: 'Новокосино'
            },
            { x: 2391,
                y: 1285,
                type: 'Shapes.Rect',
                width: 130,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Новокосино',
        markers: [
            {
                cx: '2455',
                cy: '1325',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 144,
        labels: [
            { x: 1619.1,
                y: 1561.34,
                type: 'Shapes.Text',
                name: 'Новокузнецкая'
            },
            { x: 1610,
                y: 1542,
                type: 'Shapes.Rect',
                width: 162,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Новокузнецкая',
        markers: [
            {
                cx: '1629',
                cy: '1581',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 145,
        labels: [
            { x: 782.843,
                y: 2152.34,
                type: 'Shapes.Text',
                name: 'Новопеределкино'
            },
            { x: 772,
                y: 2133,
                type: 'Shapes.Rect',
                width: 193,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Новопеределкино',
        markers: [
            {
                cx: '754',
                cy: '2146',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 146,
        labels: [
            { x: 1314.94,
                y: 1067.34,
                type: 'Shapes.Text',
                name: 'Новослободская'
            },
            { x: 1305,
                y: 1048,
                type: 'Shapes.Rect',
                width: 177,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Новослободская',
        markers: [
            {
                cx: '1390',
                cy: '1084',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#894e35'
            }
        ]
    },
    {
        id: 147,
        labels: [
            { x: 2115.89,
                y: 1602.34,
                type: 'Shapes.Text',
                name: 'Новохохловская'
            },
            { x: 2106,
                y: 1583,
                type: 'Shapes.Rect',
                width: 176,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Новохохловская',
        markers: [
            {
                cx: '2049',
                cy: '1596',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            },
            {
                cx: '2089',
                cy: '1596',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 148,
        labels: [
            { x: 1436.94,
                y: 2320.34,
                type: 'Shapes.Text',
                name: 'Новоясеневская'
            },
            { x: 1427,
                y: 2301,
                type: 'Shapes.Rect',
                width: 177,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Новоясеневская',
        markers: [
            {
                cx: '1410',
                cy: '2322',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 149,
        labels: [
            { x: 1334.91,
                y: 2041.34,
                type: 'Shapes.Text',
                name: 'Новые'
            },
            { x: 1334.91,
                y: 2064.34,
                type: 'Shapes.Text',
                name: 'Черёмушки'
            },
            { x: 1328,
                y: 2022,
                type: 'Shapes.Rect',
                width: 123,
                height: 48,
                rx: 14
            }
        ],
        stationName: 'Новые Черёмушки',
        markers: [
            {
                cx: '1314',
                cy: '2046',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 150,
        labels: [
            { x: 297.955,
                y: 1089.34,
                type: 'Shapes.Text',
                name: 'Одинцово'
            },
            { x: 292,
                y: 1070,
                type: 'Shapes.Rect',
                width: 106,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Одинцово',
        markers: [
            {
                cx: '415',
                cy: '1082',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 151,
        labels: [
            { x: 777,
                y: 1952.34,
                type: 'Shapes.Text',
                name: 'Озёрная'
            },
            { x: 772,
                y: 1933,
                type: 'Shapes.Rect',
                width: 89,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Озёрная',
        markers: [
            {
                cx: '754',
                cy: '1946',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 152,
        labels: [
            { x: 1119.01,
                y: 767.336,
                type: 'Shapes.Text',
                name: 'Окружная'
            },
            { x: 1113,
                y: 748,
                type: 'Shapes.Rect',
                width: 107,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Окружная',
        markers: [
            {
                cx: '1234',
                cy: '776',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            },
            {
                cx: '1234',
                cy: '750',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            },
            {
                cx: '1259',
                cy: '766',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 153,
        labels: [
            { x: 2282.44,
                y: 1703.34,
                type: 'Shapes.Text',
                name: 'Окская'
            },
            { x: 2278,
                y: 1684,
                type: 'Shapes.Rect',
                width: 79,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Окская',
        markers: [
            {
                cx: '2263',
                cy: '1697',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 154,
        labels: [
            { x: 1428.87,
                y: 1794.34,
                type: 'Shapes.Text',
                name: 'Октябрьская'
            },
            { x: 1421,
                y: 1775,
                type: 'Shapes.Rect',
                width: 140,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Октябрьская',
        markers: [
            {
                cx: '1401',
                cy: '1785',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#894e35'
            },
            {
                cx: '1416',
                cy: '1770',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 155,
        labels: [
            { x: 740.469,
                y: 1097.34,
                type: 'Shapes.Text',
                name: 'Октябрьское'
            },
            { x: 813.945,
                y: 1120.34,
                type: 'Shapes.Text',
                name: 'Поле'
            },
            { x: 732,
                y: 1079,
                type: 'Shapes.Rect',
                width: 136,
                height: 46,
                rx: 14
            }
        ],
        stationName: 'Октябрьское Поле',
        markers: [
            {
                cx: '885',
                cy: '1091',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 156,
        labels: [
            { x: 1192.73,
                y: 2462.34,
                type: 'Shapes.Text',
                name: 'Ольховая'
            },
            { x: 1187,
                y: 2443,
                type: 'Shapes.Rect',
                width: 102,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Ольховая',
        markers: [
            {
                cx: 1167,
                cy: 2457,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 157,
        labels: [
            { x: 308.112,
                y: 706.336,
                type: 'Shapes.Text',
                name: 'Опалиха'
            },
            { x: 303,
                y: 687,
                type: 'Shapes.Rect',
                width: 91,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Опалиха',
        markers: [
            {
                cx: '414',
                cy: '700',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 158,
        labels: [
            { x: 2062.17,
                y: 2274.34,
                type: 'Shapes.Text',
                name: 'Орехово'
            },
            { x: 2057,
                y: 2255,
                type: 'Shapes.Rect',
                width: 92,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Орехово',
        markers: [
            {
                cx: '2045',
                cy: '2276',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 159,
        labels: [
            { x: 1913.52,
                y: 2626.34,
                type: 'Shapes.Text',
                name: 'Остафьево'
            },
            { x: 1907,
                y: 2607,
                type: 'Shapes.Rect',
                width: 116,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Остафьево',
        markers: [
            {
                cx: '1891',
                cy: '2620',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 160,
        labels: [
            { x: 1320.73,
                y: 652.336,
                type: 'Shapes.Text',
                name: 'Отрадное'
            },
            { x: 1315,
                y: 633,
                type: 'Shapes.Rect',
                width: 102,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Отрадное',
        markers: [
            {
                cx: '1298',
                cy: '645',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 161,
        labels: [
            { x: 1524.75,
                y: 1431.34,
                type: 'Shapes.Text',
                name: 'Охотный Ряд'
            },
            { x: 1517,
                y: 1412,
                type: 'Shapes.Rect',
                width: 138,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Охотный Ряд',
        markers: [
            {
                cx: 1502,
                cy: 1429,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 162,
        labels: [
            { x: 1615.13,
                y: 1716.34,
                type: 'Shapes.Text',
                name: 'Павелецкая'
            },
            { x: 1608,
                y: 1697,
                type: 'Shapes.Rect',
                width: 127,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Павелецкая',
        markers: [
            {
                cx: '1730',
                cy: '1682',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            },
            {
                cx: '1745',
                cy: '1696',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#894e35'
            }
        ]
    },
    {
        id: 163,
        labels: [
            { x: 301.506,
                y: 807.336,
                type: 'Shapes.Text',
                name: 'Павшино'
            },
            { x: 296,
                y: 788,
                type: 'Shapes.Rect',
                width: 98,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Павшино',
        markers: [
            {
                cx: '414',
                cy: '800',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 164,
        labels: [
            { x: 946.82,
                y: 1077.34,
                type: 'Shapes.Text',
                name: 'Панфиловская'
            },
            { x: 938,
                y: 1058,
                type: 'Shapes.Rect',
                width: 157,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Панфиловская',
        markers: [
            {
                cx: '923',
                cy: '1071',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 165,
        labels: [
            { x: 660.978,
                y: 1651.34,
                type: 'Shapes.Text',
                name: 'Парк Победы'
            },
            { x: 653,
                y: 1632,
                type: 'Shapes.Rect',
                width: 142,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Парк Победы',
        markers: [
            {
                cx: '800',
                cy: '1665',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            },
            {
                cx: '813',
                cy: '1652',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 166,
        labels: [
            { x: 1273.93,
                y: 1694.34,
                type: 'Shapes.Text',
                name: 'Парк культуры'
            },
            { x: 1265,
                y: 1675,
                type: 'Shapes.Rect',
                width: 159,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Парк культуры',
        markers: [
            {
                cx: 1252,
                cy: 1676,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            },
            {
                cx: '1237',
                cy: '1691',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#894e35'
            }
        ]
    },
    {
        id: 167,
        labels: [
            { x: 2158.43,
                y: 1157.34,
                type: 'Shapes.Text',
                name: 'Партизанская'
            },
            { x: 2150,
                y: 1138,
                type: 'Shapes.Rect',
                width: 150,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Партизанская',
        markers: [
            {
                cx: '2132',
                cy: '1150',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 168,
        labels: [
            { x: 297.73,
                y: 857.336,
                type: 'Shapes.Text',
                name: 'Пенягино'
            },
            { x: 292,
                y: 838,
                type: 'Shapes.Rect',
                width: 102,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Пенягино',
        markers: [
            {
                cx: '414',
                cy: '850',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 169,
        labels: [
            { x: 2256.88,
                y: 1012.34,
                type: 'Shapes.Text',
                name: 'Первомайская'
            },
            { x: 2248,
                y: 993,
                type: 'Shapes.Rect',
                width: 158,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Первомайская',
        markers: [
            {
                cx: '2230',
                cy: '1005',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 170,
        labels: [
            { x: 2026.22,
                y: 2071.34,
                type: 'Shapes.Text',
                name: 'Перерва'
            },
            { x: 2021,
                y: 2052,
                type: 'Shapes.Rect',
                width: 93,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Перерва',
        markers: [
            {
                cx: '2130',
                cy: '2060',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 171,
        labels: [
            { x: 2224.49,
                y: 1304.34,
                type: 'Shapes.Text',
                name: 'Перово'
            },
            { x: 2220,
                y: 1285,
                type: 'Shapes.Rect',
                width: 80,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Перово',
        markers: [
            {
                cx: '2260',
                cy: '1326',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 172,
        labels: [
            { x: 1047.41,
                y: 1152.34,
                type: 'Shapes.Text',
                name: 'Петровский'
            },
            { x: 1115.75,
                y: 1175.34,
                type: 'Shapes.Text',
                name: 'парк'
            },
            { x: 1037,
                y: 1135,
                type: 'Shapes.Rect',
                width: 129,
                height: 44,
                rx: 14
            }
        ],
        stationName: 'Петровский парк',
        markers: [
            {
                cx: '1138',
                cy: '1113',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            },
            {
                cx: '1138',
                cy: '1125',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#6ac9c8'
            }
        ]
    },
    {
        id: 173,
        labels: [
            { x: 1329.44,
                y: 782.336,
                type: 'Shapes.Text',
                name: 'Петровско-Разумовская'
            },
            { x: 1315,
                y: 763,
                type: 'Shapes.Rect',
                width: 257,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Петровско-Разумовская',
        markers: [
            {
                cx: '1298',
                cy: '801',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            },
            {
                cx: '1318',
                cy: '801',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 174,
        labels: [
            { x: 2120.35,
                y: 1861.34,
                type: 'Shapes.Text',
                name: 'Печатники'
            },
            { x: 2114,
                y: 1842,
                type: 'Shapes.Rect',
                width: 113,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Печатники',
        markers: [
            {
                cx: '2098',
                cy: '1851',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 175,
        labels: [
            { x: 519.247,
                y: 1439.34,
                type: 'Shapes.Text',
                name: 'Пионерская'
            },
            { x: 512,
                y: 1420,
                type: 'Shapes.Rect',
                width: 129,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Пионерская',
        markers: [
            {
                cx: '654',
                cy: '1420',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 176,
        labels: [
            { x: 715.517,
                y: 772.336,
                type: 'Shapes.Text',
                name: 'Планерная'
            },
            { x: 709,
                y: 753,
                type: 'Shapes.Rect',
                width: 116,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Планерная',
        markers: [
            {
                cx: '694',
                cy: '765',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 177,
        labels: [
            { x: 1344.07,
                y: 1922.34,
                type: 'Shapes.Text',
                name: 'Площадь Гагарина'
            },
            { x: 1333,
                y: 1903,
                type: 'Shapes.Rect',
                width: 197,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Площадь Гагарина',
        markers: [
            {
                cx: '1314',
                cy: '1907',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 178,
        labels: [
            { x: 1975.22,
                y: 1519.34,
                type: 'Shapes.Text',
                name: 'Площадь Ильича'
            },
            { x: 1965,
                y: 1500,
                type: 'Shapes.Rect',
                width: 182,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Площадь Ильича',
        markers: [
            {
                cx: '1953',
                cy: '1522',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 179,
        labels: [
            { x: 1529.58,
                y: 1489.34,
                type: 'Shapes.Text',
                name: 'Площадь Революции'
            },
            { x: 1517,
                y: 1470,
                type: 'Shapes.Rect',
                width: 224,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Площадь Революции',
        markers: [
            {
                cx: '1502',
                cy: '1477',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 180,
        labels: [
            { x: 1913.07,
                y: 2743.34,
                type: 'Shapes.Text',
                name: 'Подольск'
            },
            { x: 1907,
                y: 2724,
                type: 'Shapes.Rect',
                width: 108,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Подольск',
        markers: [
            {
                cx: '1891',
                cy: '2737',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 181,
        labels: [
            { x: 813.798,
                y: 925.336,
                type: 'Shapes.Text',
                name: 'Покровско-'
            },
            { x: 813.798,
                y: 948.336,
                type: 'Shapes.Text',
                name: 'Стрешнево'
            },
            { x: 807,
                y: 907,
                type: 'Shapes.Rect',
                width: 121,
                height: 46,
                rx: 14
            }
        ],
        stationName: 'Покровско-Стрешнево',
        markers: [
            {
                cx: '865',
                cy: '964',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 182,
        labels: [
            { x: 1914.19,
                y: 2322.34,
                type: 'Shapes.Text',
                name: 'Покровское'
            },
            { x: 1907,
                y: 2303,
                type: 'Shapes.Rect',
                width: 128,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Покровское',
        markers: [
            {
                cx: '1891',
                cy: '2320',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 183,
        labels: [
            { x: 952.708,
                y: 1203.34,
                type: 'Shapes.Text',
                name: 'Полежаевская'
            },
            { x: 944,
                y: 1184,
                type: 'Shapes.Rect',
                width: 155,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Полежаевская',
        markers: [
            {
                cx: '927',
                cy: '1194',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 184,
        labels: [
            { x: 1517.28,
                y: 1703.34,
                type: 'Shapes.Text',
                name: 'Полянка'
            },
            { x: 1512,
                y: 1684,
                type: 'Shapes.Rect',
                width: 94,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Полянка',
        markers: [
            {
                cx: '1517',
                cy: '1721',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 185,
        labels: [
            { x: 1547.01,
                y: 2252.34,
                type: 'Shapes.Text',
                name: 'Пражская'
            },
            { x: 1541,
                y: 2233,
                type: 'Shapes.Rect',
                width: 107,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Пражская',
        markers: [
            {
                cx: '1666',
                cy: '2246',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 186,
        labels: [
            { x: 1955.17,
                y: 1000.34,
                type: 'Shapes.Text',
                name: 'Преображенская'
            },
            { x: 1955.17,
                y: 1023.34,
                type: 'Shapes.Text',
                name: 'площадь'
            },
            { x: 1945,
                y: 979,
                type: 'Shapes.Rect',
                width: 181,
                height: 52,
                rx: 14
            }
        ],
        stationName: 'Преображенская площадь',
        markers: [
            {
                cx: 1925,
                cy: 1005,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 187,
        labels: [
            { x: 1142.24,
                y: 2410.34,
                type: 'Shapes.Text',
                name: 'Прокшино'
            },
            { x: 1136,
                y: 2391,
                type: 'Shapes.Rect',
                width: 111,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Прокшино',
        markers: [
            {
                cx: 1117,
                cy: 2407,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 188,
        labels: [
            { x: 1797.43,
                y: 1673.34,
                type: 'Shapes.Text',
                name: 'Пролетарская'
            },
            { x: 1789,
                y: 1654,
                type: 'Shapes.Rect',
                width: 150,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Пролетарская',
        markers: [
            {
                cx: '1935',
                cy: '1641',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 189,
        labels: [
            { x: 1072.54,
                y: 2021.34,
                type: 'Shapes.Text',
                name: 'Проспект Вернадского'
            },
            { x: 1059,
                y: 2002,
                type: 'Shapes.Rect',
                width: 241,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Проспект Вернадского',
        markers: [
            {
                cx: 1044,
                cy: 2016,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 190,
        labels: [
            { x: 1495.27,
                y: 1126.34,
                type: 'Shapes.Text',
                name: 'Проспект Мира'
            },
            { x: 1486,
                y: 1107,
                type: 'Shapes.Rect',
                width: 165,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Проспект Мира',
        markers: [
            {
                cx: '1666',
                cy: '1111',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#894e35'
            },
            {
                cx: '1666',
                cy: '1130',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 191,
        labels: [
            { x: 1336.37,
                y: 2004.34,
                type: 'Shapes.Text',
                name: 'Профсоюзная'
            },
            { x: 1328,
                y: 1985,
                type: 'Shapes.Rect',
                width: 149,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Профсоюзная',
        markers: [
            {
                cx: '1314',
                cy: '1997',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 192,
        labels: [
            { x: 1355.36,
                y: 1377.34,
                type: 'Shapes.Text',
                name: 'Пушкинская'
            },
            { x: 1348,
                y: 1358,
                type: 'Shapes.Rect',
                width: 131,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Пушкинская',
        markers: [
            {
                cx: '1362',
                cy: '1344',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 193,
        labels: [
            { x: 447.474,
                y: 763.836,
                type: 'Shapes.Text',
                name: 'Пятницкое'
            },
            { x: 490.755,
                y: 786.836,
                type: 'Shapes.Text',
                name: 'шоссе'
            },
            { x: 441,
                y: 746,
                type: 'Shapes.Rect',
                width: 114,
                height: 45,
                rx: 14
            }
        ],
        stationName: 'Пятницкое шоссе',
        markers: [
            {
                cx: '569',
                cy: '768',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 194,
        labels: [
            { x: 304.449,
                y: 1352.34,
                type: 'Shapes.Text',
                name: 'Рабочий Посёлок'
            },
            { x: 294,
                y: 1333,
                type: 'Shapes.Rect',
                width: 186,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Рабочий Посёлок',
        markers: [
            {
                cx: '499',
                cy: '1341',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 195,
        labels: [
            { x: 777.337,
                y: 1852.34,
                type: 'Shapes.Text',
                name: 'Раменки'
            },
            { x: 772,
                y: 1833,
                type: 'Shapes.Rect',
                width: 95,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Раменки',
        markers: [
            {
                cx: '754',
                cy: '1846',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 196,
        labels: [
            { x: 779.697,
                y: 2199.34,
                type: 'Shapes.Text',
                name: 'Рассказовка'
            },
            { x: 772,
                y: 2180,
                type: 'Shapes.Rect',
                width: 137,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Рассказовка',
        markers: [
            {
                cx: '754',
                cy: '2193',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 197,
        labels: [
            { x: 911.764,
                y: 765.336,
                type: 'Shapes.Text',
                name: 'Речной вокзал'
            },
            { x: 903,
                y: 746,
                type: 'Shapes.Rect',
                width: 156,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Речной вокзал',
        markers: [
            {
                cx: '890',
                cy: '760',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 198,
        labels: [
            { x: 1694.39,
                y: 1029.34,
                type: 'Shapes.Text',
                name: 'Рижская'
            },
            { x: 1689,
                y: 1010,
                type: 'Shapes.Rect',
                width: 96,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Рижская',
        markers: [
            {
                cx: '1666',
                cy: '1053',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            },
            {
                cx: '1696',
                cy: '1053',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 199,
        labels: [
            { x: 1829.17,
                y: 1513.34,
                type: 'Shapes.Text',
                name: 'Римская'
            },
            { x: 1824,
                y: 1494,
                type: 'Shapes.Rect',
                width: 92,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Римская',
        markers: [
            {
                cx: '1935',
                cy: '1504',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 200,
        labels: [
            { x: 1791.29,
                y: 749.336,
                type: 'Shapes.Text',
                name: 'Ростокино'
            },
            { x: 1785,
                y: 730,
                type: 'Shapes.Rect',
                width: 112,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Ростокино',
        markers: [
            {
                cx: '1785',
                cy: '765',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 201,
        labels: [
            { x: 1065.57,
                y: 2231.34,
                type: 'Shapes.Text',
                name: 'Румянцево'
            },
            { x: 1059,
                y: 2212,
                type: 'Shapes.Rect',
                width: 117,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Румянцево',
        markers: [
            {
                cx: 1044,
                cy: 2226,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 202,
        labels: [
            { x: 2329.08,
                y: 1766.34,
                type: 'Shapes.Text',
                name: 'Рязанский проспект'
            },
            { x: 2317,
                y: 1747,
                type: 'Shapes.Rect',
                width: 215,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Рязанский проспект',
        markers: [
            {
                cx: '2299',
                cy: '1762',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 203,
        labels: [
            { x: 1329.87,
                y: 999.336,
                type: 'Shapes.Text',
                name: 'Савёловская'
            },
            { x: 1322,
                y: 980,
                type: 'Shapes.Rect',
                width: 140,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Савёловская',
        markers: [
            {
                cx: '1281',
                cy: '1009',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            },
            {
                cx: '1314',
                cy: '1009',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            },
            {
                cx: '1296',
                cy: '1009',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#6ac9c8'
            },
            {
                cx: '1259',
                cy: '1009',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 204,
        labels: [
            { x: 1065.57,
                y: 2300.34,
                type: 'Shapes.Text',
                name: 'Саларьево'
            },
            { x: 1059,
                y: 2281,
                type: 'Shapes.Rect',
                width: 117,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Саларьево',
        markers: [
            {
                cx: 1044,
                cy: 2296,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 205,
        labels: [
            { x: 1694.84,
                y: 652.336,
                type: 'Shapes.Text',
                name: 'Свиблово'
            },
            { x: 1689,
                y: 633,
                type: 'Shapes.Rect',
                width: 104,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Свиблово',
        markers: [
            {
                cx: '1666',
                cy: '645',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 206,
        labels: [
            { x: 1474.34,
                y: 2102.34,
                type: 'Shapes.Text',
                name: 'Севастопольская'
            },
            { x: 1464,
                y: 2083,
                type: 'Shapes.Rect',
                width: 184,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Севастопольская',
        markers: [
            {
                cx: '1666',
                cy: '2096',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 207,
        labels: [
            { x: 932.528,
                y: 585.336,
                type: 'Shapes.Text',
                name: 'Селигерская'
            },
            { x: 925,
                y: 566,
                type: 'Shapes.Rect',
                width: 134,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Селигерская',
        markers: [
            {
                cx: '1074',
                cy: '577',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 208,
        labels: [
            { x: 1929.98,
                y: 1219.34,
                type: 'Shapes.Text',
                name: 'Семёновская'
            },
            { x: 1922,
                y: 1200,
                type: 'Shapes.Rect',
                width: 142,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Семёновская',
        markers: [
            {
                cx: '2073',
                cy: '1207',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 209,
        labels: [
            { x: 1581.31,
                y: 1764.34,
                type: 'Shapes.Text',
                name: 'Серпуховская'
            },
            { x: 1573,
                y: 1745,
                type: 'Shapes.Rect',
                width: 148,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Серпуховская',
        markers: [
            {
                cx: '1566',
                cy: '1773',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 210,
        labels: [
            { x: 357.27,
                y: 1300.34,
                type: 'Shapes.Text',
                name: 'Сетунь'
            },
            { x: 353,
                y: 1281,
                type: 'Shapes.Rect',
                width: 76,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Сетунь',
        markers: [
            {
                cx: '444',
                cy: '1286',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 211,
        labels: [
            { x: 1914.19,
                y: 2687.34,
                type: 'Shapes.Text',
                name: 'Силикатная'
            },
            { x: 1907,
                y: 2668,
                type: 'Shapes.Rect',
                width: 128,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Силикатная',
        markers: [
            {
                cx: '1891',
                cy: '2680',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 212,
        labels: [
            { x: 299.843,
                y: 1191.34,
                type: 'Shapes.Text',
                name: 'Сколково'
            },
            { x: 294,
                y: 1172,
                type: 'Shapes.Rect',
                width: 104,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Сколково',
        markers: [
            {
                cx: '416',
                cy: '1185',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 213,
        labels: [
            { x: 395.247,
                y: 1492.34,
                type: 'Shapes.Text',
                name: 'Славянский бульвар'
            },
            { x: 383,
                y: 1473,
                type: 'Shapes.Rect',
                width: 218,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Славянский бульвар',
        markers: [
            {
                cx: '621',
                cy: '1484',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 214,
        labels: [
            { x: 1156.42,
                y: 1565.34,
                type: 'Shapes.Text',
                name: 'Смоленская'
            },
            { x: 1149,
                y: 1546,
                type: 'Shapes.Rect',
                width: 132,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Смоленская',
        markers: [
            {
                cx: '1206',
                cy: '1478',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 215,
        labels: [
            { x: 1156.42,
                y: 1565.34,
                type: 'Shapes.Text',
                name: 'Смоленская'
            },
            { x: 1149,
                y: 1546,
                type: 'Shapes.Rect',
                width: 132,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Смоленская',
        markers: [
            {
                cx: '1203',
                cy: '1537',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 216,
        labels: [
            { x: 1081.93,
                y: 1008.34,
                type: 'Shapes.Text',
                name: 'Сокол'
            },
            { x: 1078,
                y: 989,
                type: 'Shapes.Rect',
                width: 70,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Сокол',
        markers: [
            {
                cx: '1062',
                cy: '1010',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 217,
        labels: [
            { x: 2135.38,
                y: 1252.34,
                type: 'Shapes.Text',
                name: 'Соколиная гора'
            },
            { x: 2126,
                y: 1233,
                type: 'Shapes.Rect',
                width: 167,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Соколиная гора',
        markers: [
            {
                cx: '2113',
                cy: '1245',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 218,
        labels: [
            { x: 1903.81,
                y: 1065.34,
                type: 'Shapes.Text',
                name: 'Сокольники'
            },
            { x: 1896,
                y: 1046,
                type: 'Shapes.Rect',
                width: 139,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Сокольники',
        markers: [
            {
                cx: 1878,
                cy: 1052,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 219,
        labels: [
            { x: 777.843,
                y: 2052.34,
                type: 'Shapes.Text',
                name: 'Солнцево'
            },
            { x: 772,
                y: 2033,
                type: 'Shapes.Rect',
                width: 104,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Солнцево',
        markers: [
            {
                cx: '754',
                cy: '2046',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 220,
        labels: [
            { x: 718.112,
                y: 1016.34,
                type: 'Shapes.Text',
                name: 'Спартак'
            },
            { x: 713,
                y: 997,
                type: 'Shapes.Rect',
                width: 91,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Спартак',
        markers: [
            {
                cx: '816',
                cy: '997',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 221,
        labels: [
            { x: 1161.13,
                y: 1809.34,
                type: 'Shapes.Text',
                name: 'Спортивная'
            },
            { x: 1154,
                y: 1790,
                type: 'Shapes.Rect',
                width: 127,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Спортивная',
        markers: [
            {
                cx: 1137,
                cy: 1790,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 222,
        labels: [
            { x: 1641.13,
                y: 1341.34,
                type: 'Shapes.Text',
                name: 'Сретенский бульвар'
            },
            { x: 1629,
                y: 1322,
                type: 'Shapes.Rect',
                width: 216,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Сретенский бульвар',
        markers: [
            {
                cx: '1649',
                cy: '1308',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 223,
        labels: [
            { x: 2202.26,
                y: 1569.34,
                type: 'Shapes.Text',
                name: 'Стахановская'
            },
            { x: 2194,
                y: 1550,
                type: 'Shapes.Rect',
                width: 147,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Стахановская',
        markers: [
            {
                cx: '2178',
                cy: '1570',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 224,
        labels: [
            { x: 919.686,
                y: 1017.34,
                type: 'Shapes.Text',
                name: 'Стрешнево'
            },
            { x: 913,
                y: 998,
                type: 'Shapes.Rect',
                width: 119,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Стрешнево',
        markers: [
            {
                cx: '967',
                cy: '986',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            },
            {
                cx: '967',
                cy: '966',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 225,
        labels: [
            { x: 597.618,
                y: 1113.34,
                type: 'Shapes.Text',
                name: 'Строгино'
            },
            { x: 592,
                y: 1094,
                type: 'Shapes.Rect',
                width: 100,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Строгино',
        markers: [
            {
                cx: '569',
                cy: '1106',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 226,
        labels: [
            { x: 858.258,
                y: 1531.34,
                type: 'Shapes.Text',
                name: 'Студенческая'
            },
            { x: 850,
                y: 1512,
                type: 'Shapes.Rect',
                width: 147,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Студенческая',
        markers: [
            {
                cx: '987',
                cy: '1547',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 227,
        labels: [
            { x: 1526.64,
                y: 1214.34,
                type: 'Shapes.Text',
                name: 'Сухаревская'
            },
            { x: 1519,
                y: 1195,
                type: 'Shapes.Rect',
                width: 136,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Сухаревская',
        markers: [
            {
                cx: '1666',
                cy: '1197',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 228,
        labels: [
            { x: 716.753,
                y: 853.336,
                type: 'Shapes.Text',
                name: 'Сходненская'
            },
            { x: 709,
                y: 834,
                type: 'Shapes.Rect',
                width: 138,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Сходненская',
        markers: [
            {
                cx: '693',
                cy: '849',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 229,
        labels: [
            { x: 1813.12,
                y: 1573.34,
                type: 'Shapes.Text',
                name: 'Таганская'
            },
            { x: 1807,
                y: 1554,
                type: 'Shapes.Rect',
                width: 109,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Таганская',
        markers: [
            {
                cx: '1823',
                cy: '1593',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#894e35'
            },
            {
                cx: '1843',
                cy: '1604',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 230,
        labels: [
            { x: 1375.62,
                y: 1307.34,
                type: 'Shapes.Text',
                name: 'Тверская'
            },
            { x: 1370,
                y: 1288,
                type: 'Shapes.Rect',
                width: 100,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Тверская',
        markers: [
            {
                cx: '1373',
                cy: '1325',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 231,
        labels: [
            { x: 1524.53,
                y: 1460.34,
                type: 'Shapes.Text',
                name: 'Театральная'
            },
            { x: 1517,
                y: 1441,
                type: 'Shapes.Rect',
                width: 134,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Театральная',
        markers: [
            {
                cx: '1502',
                cy: '1453',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 232,
        labels: [
            { x: 2153.71,
                y: 1672.34,
                type: 'Shapes.Text',
                name: 'Текстильщики'
            },
            { x: 2145,
                y: 1653,
                type: 'Shapes.Rect',
                width: 155,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Текстильщики',
        markers: [
            {
                cx: '2145',
                cy: '1641',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            },
            {
                cx: '2130',
                cy: '1656',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 233,
        labels: [
            { x: 985.798,
                y: 1406.34,
                type: 'Shapes.Text',
                name: 'Тестовская'
            },
            { x: 979,
                y: 1387,
                type: 'Shapes.Rect',
                width: 121,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Тестовская',
        markers: [
            {
                cx: '967',
                cy: '1383',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 234,
        labels: [
            { x: 1911.52,
                y: 1868.34,
                type: 'Shapes.Text',
                name: 'Технопарк'
            },
            { x: 1905,
                y: 1849,
                type: 'Shapes.Rect',
                width: 116,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Технопарк',
        markers: [
            {
                cx: '1891',
                cy: '1862',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 235,
        labels: [
            { x: 1324.16,
                y: 880.336,
                type: 'Shapes.Text',
                name: 'Тимирязевская'
            },
            { x: 1315,
                y: 861,
                type: 'Shapes.Rect',
                width: 163,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Тимирязевская',
        markers: [
            {
                cx: '1298',
                cy: '873',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            },
            {
                cx: '1259',
                cy: '873',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 236,
        labels: [
            { x: 1490.82,
                y: 1631.34,
                type: 'Shapes.Text',
                name: 'Третьяковская'
            },
            { x: 1482,
                y: 1612,
                type: 'Shapes.Rect',
                width: 157,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Третьяковская',
        markers: [
            {
                cx: '1607',
                cy: '1581',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            },
            {
                cx: '1618',
                cy: '1600',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            }
        ]
    },
    {
        id: 237,
        labels: [
            { x: 590.865,
                y: 994.336,
                type: 'Shapes.Text',
                name: 'Трикотажная'
            },
            { x: 583,
                y: 975,
                type: 'Shapes.Rect',
                width: 140,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Трикотажная',
        markers: [
            {
                cx: '661',
                cy: '964',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 238,
        labels: [
            { x: 1065.35,
                y: 2161.34,
                type: 'Shapes.Text',
                name: 'Тропарёво'
            },
            { x: 1059,
                y: 2142,
                type: 'Shapes.Rect',
                width: 113,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Тропарёво',
        markers: [
            {
                cx: 1044,
                cy: 2156,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 239,
        labels: [
            { x: 1518.89,
                y: 1175.34,
                type: 'Shapes.Text',
                name: 'Трубная'
            },
            { x: 1514,
                y: 1156,
                type: 'Shapes.Rect',
                width: 87,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Трубная',
        markers: [
            {
                cx: '1502',
                cy: '1185',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 240,
        labels: [
            { x: 1541.39,
                y: 1859.34,
                type: 'Shapes.Text',
                name: 'Тульская'
            },
            { x: 1536,
                y: 1840,
                type: 'Shapes.Rect',
                width: 96,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Тульская',
        markers: [
            {
                cx: '1646',
                cy: '1850',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 241,
        labels: [
            { x: 1686.98,
                y: 1294.34,
                type: 'Shapes.Text',
                name: 'Тургеневская'
            },
            { x: 1679,
                y: 1275,
                type: 'Shapes.Rect',
                width: 142,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Тургеневская',
        markers: [
            {
                cx: '1665',
                cy: '1293',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 242,
        labels: [
            { x: 629.573,
                y: 948.336,
                type: 'Shapes.Text',
                name: 'Тушинская'
            },
            { x: 623,
                y: 929,
                type: 'Shapes.Rect',
                width: 117,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Тушинская',
        markers: [
            {
                cx: '750',
                cy: '931',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            },
            {
                cx: '750',
                cy: '967',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 243,
        labels: [
            { x: 1359.75,
                y: 2249.34,
                type: 'Shapes.Text',
                name: 'Тёплый Стан'
            },
            { x: 1352,
                y: 2230,
                type: 'Shapes.Rect',
                width: 138,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Тёплый Стан',
        markers: [
            {
                cx: '1337',
                cy: '2246',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 244,
        labels: [
            { x: 1991.57,
                y: 1728.34,
                type: 'Shapes.Text',
                name: 'Угрешская'
            },
            { x: 1985,
                y: 1709,
                type: 'Shapes.Rect',
                width: 117,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Угрешская',
        markers: [
            {
                cx: '1983',
                cy: '1701',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 245,
        labels: [
            { x: 1000.16,
                y: 1344.34,
                type: 'Shapes.Text',
                name: 'Улица'
            },
            { x: 966.161,
                y: 1367.34,
                type: 'Shapes.Text',
                name: '1905 года'
            },
            { x: 958,
                y: 1326,
                type: 'Shapes.Rect',
                width: 105,
                height: 46,
                rx: 14
            }
        ],
        stationName: 'Улица 1905 года',
        markers: [
            {
                cx: '1071',
                cy: '1335',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 246,
        labels: [
            { x: 1691.07,
                y: 2291.34,
                type: 'Shapes.Text',
                name: 'Улица'
            },
            { x: 1691.07,
                y: 2314.34,
                type: 'Shapes.Text',
                name: 'Академика Янгеля'
            },
            { x: 1680,
                y: 2272,
                type: 'Shapes.Rect',
                width: 197,
                height: 48,
                rx: 14
            }
        ],
        stationName: 'Улица Академика Янгеля',
        markers: [
            {
                cx: '1666',
                cy: '2296',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 247,
        labels: [
            { x: 1565.28,
                y: 2604.34,
                type: 'Shapes.Text',
                name: 'Улица'
            },
            { x: 1525.02,
                y: 2627.34,
                type: 'Shapes.Text',
                name: 'Горчакова'
            },
            { x: 1517,
                y: 2586,
                type: 'Shapes.Rect',
                width: 111,
                height: 46,
                rx: 14
            }
        ],
        stationName: 'Улица Горчакова',
        markers: [
            {
                cx: '1642',
                cy: '2601',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#acbfe3'
            }
        ]
    },
    {
        id: 248,
        labels: [
            { x: 2587.27,
                y: 1917.34,
                type: 'Shapes.Text',
                name: 'Улица'
            },
            { x: 2587.27,
                y: 1940.34,
                type: 'Shapes.Text',
                name: 'Дмитриевского'
            },
            { x: 2578,
                y: 1897,
                type: 'Shapes.Rect',
                width: 165,
                height: 50,
                rx: 14
            }
        ],
        stationName: 'Улица Дмитриевского',
        markers: [
            {
                cx: '2560',
                cy: '1922',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 249,
        labels: [
            { x: 1563.3,
                y: 2466.34,
                type: 'Shapes.Text',
                name: 'Улица'
            },
            { x: 1487.64,
                y: 2489.34,
                type: 'Shapes.Text',
                name: 'Скобелевская'
            },
            { x: 1473,
                y: 2448,
                type: 'Shapes.Rect',
                width: 155,
                height: 46,
                rx: 14
            }
        ],
        stationName: 'Улица Скобелевская',
        markers: [
            {
                cx: '1642',
                cy: '2466',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#acbfe3'
            }
        ]
    },
    {
        id: 250,
        labels: [
            { x: 1561.37,
                y: 2407.34,
                type: 'Shapes.Text',
                name: 'Улица'
            },
            { x: 1442.15,
                y: 2430.34,
                type: 'Shapes.Text',
                name: 'Старокачаловская'
            },
            { x: 1430,
                y: 2389,
                type: 'Shapes.Rect',
                width: 198,
                height: 46,
                rx: 14
            }
        ],
        stationName: 'Улица Старокачаловская',
        markers: [
            {
                cx: '1642',
                cy: '2397',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#acbfe3'
            }
        ]
    },
    {
        id: 251,
        labels: [
            { x: 1067.47,
                y: 1951.34,
                type: 'Shapes.Text',
                name: 'Университет'
            },
            { x: 1060,
                y: 1932,
                type: 'Shapes.Rect',
                width: 133,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Университет',
        markers: [
            {
                cx: 1044,
                cy: 1946,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 252,
        labels: [
            { x: 1095.47,
                y: 2360.34,
                type: 'Shapes.Text',
                name: 'Филатов Луг'
            },
            { x: 1088,
                y: 2341,
                type: 'Shapes.Rect',
                width: 133,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Филатов Луг',
        markers: [
            {
                cx: 1067,
                cy: 2356,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 253,
        labels: [
            { x: 824.427,
                y: 1565.34,
                type: 'Shapes.Text',
                name: 'Фили'
            },
            { x: 821,
                y: 1546,
                type: 'Shapes.Rect',
                width: 61,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Фили',
        markers: [
            {
                cx: '809',
                cy: '1576',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#00c1f3'
            },
            {
                cx: '809',
                cy: '1541',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 254,
        labels: [
            { x: 725.719,
                y: 1465.34,
                type: 'Shapes.Text',
                name: 'Филёвский парк'
            },
            { x: 716,
                y: 1446,
                type: 'Shapes.Rect',
                width: 173,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Филёвский парк',
        markers: [
            {
                cx: '710',
                cy: '1476',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#00c1f3'
            }
        ]
    },
    {
        id: 255,
        labels: [
            { x: 1437.76,
                y: 848.336,
                type: 'Shapes.Text',
                name: 'Фонвизинская'
            },
            { x: 1429,
                y: 829,
                type: 'Shapes.Rect',
                width: 156,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Фонвизинская',
        markers: [
            {
                cx: '1414',
                cy: '843',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 256,
        labels: [
            { x: 1210.81,
                y: 1752.34,
                type: 'Shapes.Text',
                name: 'Фрунзенская'
            },
            { x: 1203,
                y: 1733,
                type: 'Shapes.Rect',
                width: 139,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Фрунзенская',
        markers: [
            {
                cx: 1185,
                cy: 1744,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 257,
        labels: [
            { x: 1118.25,
                y: 306.336,
                type: 'Shapes.Text',
                name: 'Хлебниково'
            },
            { x: 1111,
                y: 287,
                type: 'Shapes.Rect',
                width: 129,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Хлебниково',
        markers: [
            {
                cx: '1260',
                cy: '299',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 258,
        labels: [
            { x: 908.225,
                y: 675.336,
                type: 'Shapes.Text',
                name: 'Ховрино'
            },
            { x: 903,
                y: 656,
                type: 'Shapes.Rect',
                width: 93,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Ховрино',
        markers: [
            {
                cx: '890',
                cy: '670',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            }
        ]
    },
    {
        id: 259,
        labels: [
            { x: 769.011,
                y: 1200.34,
                type: 'Shapes.Text',
                name: 'Хорошёво'
            },
            { x: 763,
                y: 1181,
                type: 'Shapes.Rect',
                width: 107,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Хорошёво',
        markers: [
            {
                cx: '886',
                cy: '1194',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 260,
        labels: [
            { x: 955.034,
                y: 1233.34,
                type: 'Shapes.Text',
                name: 'Хорошёвская'
            },
            { x: 947,
                y: 1214,
                type: 'Shapes.Rect',
                width: 143,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Хорошёвская',
        markers: [
            {
                cx: '927',
                cy: '1214',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            },
            {
                cx: '927',
                cy: '1229',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#6ac9c8'
            }
        ]
    },
    {
        id: 261,
        labels: [
            { x: 963.483,
                y: 1111.34,
                type: 'Shapes.Text',
                name: 'ЦСКА'
            },
            { x: 960,
                y: 1092,
                type: 'Shapes.Rect',
                width: 62,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'ЦСКА',
        markers: [
            {
                cx: '1015',
                cy: '1125',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            },
            {
                cx: '1016',
                cy: '1140',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#6ac9c8'
            }
        ]
    },
    {
        id: 262,
        labels: [
            { x: 1841.24,
                y: 2213.34,
                type: 'Shapes.Text',
                name: 'Царицыно'
            },
            { x: 1835,
                y: 2194,
                type: 'Shapes.Rect',
                width: 111,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Царицыно',
        markers: [
            {
                cx: '1959',
                cy: '2191',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#48b85e'
            },
            {
                cx: '1959',
                cy: '2224',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 263,
        labels: [
            { x: 1385.11,
                y: 1192.34,
                type: 'Shapes.Text',
                name: 'Цветной'
            },
            { x: 1385.11,
                y: 1215.34,
                type: 'Shapes.Text',
                name: 'бульвар'
            },
            { x: 1380,
                y: 1170,
                type: 'Shapes.Rect',
                width: 91,
                height: 54,
                rx: 14
            }
        ],
        stationName: 'Цветной бульвар',
        markers: [
            {
                cx: '1481',
                cy: '1185',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 264,
        labels: [
            { x: 1808.43,
                y: 964.336,
                type: 'Shapes.Text',
                name: 'Черкизовская'
            },
            { x: 1800,
                y: 945,
                type: 'Shapes.Rect',
                width: 150,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Черкизовская',
        markers: [
            {
                cx: 1950,
                cy: 933,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 265,
        labels: [
            { x: 1503.43,
                y: 2152.34,
                type: 'Shapes.Text',
                name: 'Чертановская'
            },
            { x: 1495,
                y: 2133,
                type: 'Shapes.Rect',
                width: 150,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Чертановская',
        markers: [
            {
                cx: '1666',
                cy: '2146',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 266,
        labels: [
            { x: 1247.29,
                y: 1299.34,
                type: 'Shapes.Text',
                name: 'Чеховская'
            },
            { x: 1241,
                y: 1280,
                type: 'Shapes.Rect',
                width: 112,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Чеховская',
        markers: [
            {
                cx: '1351',
                cy: '1325',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 267,
        labels: [
            { x: 1487.48,
                y: 1288.34,
                type: 'Shapes.Text',
                name: 'Чистые пруды'
            },
            { x: 1479,
                y: 1269,
                type: 'Shapes.Rect',
                width: 151,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Чистые пруды',
        markers: [
            {
                cx: 1644,
                cy: 1288,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 268,
        labels: [
            { x: 1724.08,
                y: 1402.34,
                type: 'Shapes.Text',
                name: 'Чкаловская'
            },
            { x: 1717,
                y: 1383,
                type: 'Shapes.Rect',
                width: 126,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Чкаловская',
        markers: [
            {
                cx: '1856',
                cy: '1404',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 269,
        labels: [
            { x: 1377.31,
                y: 1844.34,
                type: 'Shapes.Text',
                name: 'Шаболовская'
            },
            { x: 1369,
                y: 1825,
                type: 'Shapes.Rect',
                width: 148,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Шаболовская',
        markers: [
            {
                cx: '1344',
                cy: '1841',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    },
    {
        id: 270,
        labels: [
            { x: 904.124,
                y: 1293.34,
                type: 'Shapes.Text',
                name: 'Шелепиха'
            },
            { x: 898,
                y: 1274,
                type: 'Shapes.Rect',
                width: 109,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Шелепиха',
        markers: [
            {
                cx: '898',
                cy: '1315',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            },
            {
                cx: '910',
                cy: '1327',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#6ac9c8'
            },
            {
                cx: '875',
                cy: '1292',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 271,
        labels: [
            { x: 1069.17,
                y: 255.336,
                type: 'Shapes.Text',
                name: 'Шереметьевская'
            },
            { x: 1059,
                y: 236,
                type: 'Shapes.Rect',
                width: 181,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Шереметьевская',
        markers: [
            {
                cx: '1260',
                cy: '249',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#faa400'
            }
        ]
    },
    {
        id: 272,
        labels: [
            { x: 2238.2,
                y: 2246.34,
                type: 'Shapes.Text',
                name: 'Шипиловская'
            },
            { x: 2230,
                y: 2227,
                type: 'Shapes.Rect',
                width: 146,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Шипиловская',
        markers: [
            {
                cx: '2216',
                cy: '2240',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#b4d445'
            }
        ]
    },
    {
        id: 273,
        labels: [
            { x: 2150.7,
                y: 1361.34,
                type: 'Shapes.Text',
                name: 'Шоссе'
            },
            { x: 2150.7,
                y: 1384.34,
                type: 'Shapes.Text',
                name: 'Энтузиастов'
            },
            { x: 2143,
                y: 1343,
                type: 'Shapes.Rect',
                width: 137,
                height: 46,
                rx: 14
            }
        ],
        stationName: 'Шоссе Энтузиастов',
        markers: [
            {
                cx: '2156',
                cy: '1327',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffc61a'
            },
            {
                cx: '2116',
                cy: '1327',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ffa8af'
            }
        ]
    },
    {
        id: 274,
        labels: [
            { x: 1913.07,
                y: 2566.34,
                type: 'Shapes.Text',
                name: 'Щербинка'
            },
            { x: 1907,
                y: 2547,
                type: 'Shapes.Rect',
                width: 108,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Щербинка',
        markers: [
            {
                cx: '1891',
                cy: '2560',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#ea4184'
            }
        ]
    },
    {
        id: 275,
        labels: [
            { x: 731.742,
                y: 1057.34,
                type: 'Shapes.Text',
                name: 'Щукинская'
            },
            { x: 725,
                y: 1038,
                type: 'Shapes.Rect',
                width: 120,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Щукинская',
        markers: [
            {
                cx: '856',
                cy: '1035',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#8e479b'
            }
        ]
    },
    {
        id: 276,
        labels: [
            { x: 2255.53,
                y: 933.336,
                type: 'Shapes.Text',
                name: 'Щёлковская'
            },
            { x: 2248,
                y: 914,
                type: 'Shapes.Rect',
                width: 134,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Щёлковская',
        markers: [
            {
                cx: '2231',
                cy: '926',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 277,
        labels: [
            { x: 1814.18,
                y: 1268.34,
                type: 'Shapes.Text',
                name: 'Электрозаводская'
            },
            { x: 1803,
                y: 1249,
                type: 'Shapes.Rect',
                width: 199,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Электрозаводская',
        markers: [
            {
                cx: '2014',
                cy: '1264',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#0078bf'
            }
        ]
    },
    {
        id: 278,
        labels: [
            { x: 2124.99,
                y: 1830.34,
                type: 'Shapes.Text',
                name: 'Юго-Восточная'
            },
            { x: 2116,
                y: 1811,
                type: 'Shapes.Rect',
                width: 160,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Юго-Восточная',
        markers: [
            {
                cx: '2289',
                cy: '1815',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#e66ac0'
            }
        ]
    },
    {
        id: 279,
        labels: [
            { x: 1067.43,
                y: 2091.34,
                type: 'Shapes.Text',
                name: 'Юго-Западная'
            },
            { x: 1059,
                y: 2072,
                type: 'Shapes.Rect',
                width: 150,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Юго-Западная',
        markers: [
            {
                cx: 1044,
                cy: 2086,
                type: 'Shapes.Circle',
                r: 5,
                fill: '#da2128'
            }
        ]
    },
    {
        id: 280,
        labels: [
            { x: 1576.27,
                y: 2202.34,
                type: 'Shapes.Text',
                name: 'Южная'
            },
            { x: 1572,
                y: 2183,
                type: 'Shapes.Rect',
                width: 76,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Южная',
        markers: [
            {
                cx: '1666',
                cy: '2196',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#a1A2A3'
            }
        ]
    },
    {
        id: 281,
        labels: [
            { x: 1400.17,
                y: 2285.34,
                type: 'Shapes.Text',
                name: 'Ясенево'
            },
            { x: 1395,
                y: 2266,
                type: 'Shapes.Rect',
                width: 92,
                height: 25,
                rx: 12.5
            }
        ],
        stationName: 'Ясенево',
        markers: [
            {
                cx: '1372',
                cy: '2281',
                type: 'Shapes.Circle',
                r: '5',
                fill: '#f58220'
            }
        ]
    }
]
