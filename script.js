const pipeSpecs = {
    HDPE: {
        name: "HDPE (High-Density Polyethylene)", standard: "DIN 8074/8075",
        diameters: [20,25,32,40,50,63,75,90,110,125,140,160,180,200,225,250,280,315,355,400,450,500,560,630,710,800,900,1000,1200],
        pressures: ["PN6","PN8","PN10","PN12.5","PN16","PN20"],
        technicalData: { catalog: "https://www.mediafire.com/file/ufkgzhuhyzqogzm/Al-Rowad+HDPE+2025.pdf/file",
                         technicalSheet: "https://www.mediafire.com/file/dbxz0tmlgsjclg2/Technical+File+HDPE+16-6-2026.pdf/file" },
        specs: {
            "20":{"PN12.5":{SDR:13.6,thickness:1.8,inner_diameter:16,weight:0.11},"PN16":{SDR:11,thickness:1.9,inner_diameter:16.2,weight:0.11},"PN20":{SDR:9,thickness:2.3,inner_diameter:15.4,weight:0.13}},
            "25":{"PN10":{SDR:17,thickness:1.8,inner_diameter:21.4,weight:0.14},"PN12.5":{SDR:13.6,thickness:1.9,inner_diameter:21,weight:0.14},"PN16":{SDR:11,thickness:2.3,inner_diameter:20.5,weight:0.17},"PN20":{SDR:9,thickness:2.8,inner_diameter:19.4,weight:0.2}},
            "32":{"PN10":{SDR:17,thickness:1.9,inner_diameter:28.2,weight:0.19},"PN12.5":{SDR:13.6,thickness:2.4,inner_diameter:27,weight:0.23},"PN16":{SDR:11,thickness:2.9,inner_diameter:26.2,weight:0.27},"PN20":{SDR:9,thickness:3.6,inner_diameter:24.9,weight:0.33}},
            "40":{"PN6":{SDR:26,thickness:1.8,inner_diameter:36.4,weight:0.23},"PN8":{SDR:21,thickness:1.9,inner_diameter:36.2,weight:0.24},"PN10":{SDR:17,thickness:2.4,inner_diameter:35.2,weight:0.3},"PN12.5":{SDR:13.6,thickness:3,inner_diameter:34,weight:0.36},"PN16":{SDR:11,thickness:3.7,inner_diameter:32.6,weight:0.43},"PN20":{SDR:9,thickness:4.5,inner_diameter:31,weight:0.51}},
            "50":{"PN6":{SDR:26,thickness:2,inner_diameter:46,weight:0.31},"PN8":{SDR:21,thickness:2.4,inner_diameter:45.2,weight:0.37},"PN10":{SDR:17,thickness:3,inner_diameter:44,weight:0.45},"PN12.5":{SDR:13.6,thickness:3.7,inner_diameter:43,weight:0.55},"PN16":{SDR:11,thickness:4.6,inner_diameter:40.8,weight:0.67},"PN20":{SDR:9,thickness:5.6,inner_diameter:38.9,weight:0.79}},
            "63":{"PN6":{SDR:26,thickness:2.5,inner_diameter:58,weight:0.49},"PN8":{SDR:21,thickness:3,inner_diameter:57,weight:0.58},"PN10":{SDR:17,thickness:3.8,inner_diameter:55.4,weight:0.72},"PN12.5":{SDR:13.6,thickness:4.7,inner_diameter:54,weight:0.87},"PN16":{SDR:11,thickness:5.8,inner_diameter:51.4,weight:1.05},"PN20":{SDR:9,thickness:7.1,inner_diameter:48.8,weight:1.26}},
            "75":{"PN6":{SDR:26,thickness:2.9,inner_diameter:69.2,weight:0.68},"PN8":{SDR:21,thickness:3.6,inner_diameter:67.8,weight:0.83},"PN10":{SDR:17,thickness:4.5,inner_diameter:66,weight:1.02},"PN12.5":{SDR:13.6,thickness:5.6,inner_diameter:64,weight:1.24},"PN16":{SDR:11,thickness:6.8,inner_diameter:61.4,weight:1.47},"PN20":{SDR:9,thickness:8.4,inner_diameter:58.2,weight:1.76}},
            "90":{"PN6":{SDR:26,thickness:3.5,inner_diameter:83.1,weight:0.98},"PN8":{SDR:21,thickness:4.3,inner_diameter:81.4,weight:1.18},"PN10":{SDR:17,thickness:5.4,inner_diameter:79.2,weight:1.46},"PN12.5":{SDR:13.6,thickness:6.7,inner_diameter:77,weight:1.77},"PN16":{SDR:11,thickness:8.2,inner_diameter:73.6,weight:2.12},"PN20":{SDR:9,thickness:10.1,inner_diameter:69.8,weight:2.54}},
            "110":{"PN6":{SDR:26,thickness:4.2,inner_diameter:101.5,weight:1.43},"PN8":{SDR:21,thickness:5.3,inner_diameter:99.4,weight:1.77},"PN10":{SDR:17,thickness:6.6,inner_diameter:96.8,weight:2.17},"PN12.5":{SDR:13.6,thickness:8.1,inner_diameter:94,weight:2.62},"PN16":{SDR:11,thickness:10,inner_diameter:90,weight:3.14},"PN20":{SDR:9,thickness:12.3,inner_diameter:85.4,weight:3.78}},
            "125":{"PN6":{SDR:26,thickness:4.8,inner_diameter:115.4,weight:1.84},"PN8":{SDR:21,thickness:6,inner_diameter:113,weight:2.27},"PN10":{SDR:17,thickness:7.4,inner_diameter:110.2,weight:2.76},"PN12.5":{SDR:13.6,thickness:9.2,inner_diameter:107,weight:3.37},"PN16":{SDR:11,thickness:11.4,inner_diameter:102.3,weight:4.08},"PN20":{SDR:9,thickness:14,inner_diameter:97,weight:4.87}},
            "140":{"PN6":{SDR:26,thickness:5.4,inner_diameter:129.2,weight:2.32},"PN8":{SDR:21,thickness:6.7,inner_diameter:126.6,weight:2.83},"PN10":{SDR:17,thickness:8.3,inner_diameter:123.4,weight:3.46},"PN12.5":{SDR:13.6,thickness:10.3,inner_diameter:119,weight:4.22},"PN16":{SDR:11,thickness:12.7,inner_diameter:114.5,weight:5.08},"PN20":{SDR:9,thickness:15.7,inner_diameter:108.6,weight:6.11}},
            "160":{"PN6":{SDR:26,thickness:6.2,inner_diameter:147.7,weight:3.04},"PN8":{SDR:21,thickness:7.7,inner_diameter:144.6,weight:3.72},"PN10":{SDR:17,thickness:9.5,inner_diameter:141,weight:4.52},"PN12.5":{SDR:13.6,thickness:11.8,inner_diameter:136,weight:5.5},"PN16":{SDR:11,thickness:14.6,inner_diameter:130.8,weight:6.67},"PN20":{SDR:9,thickness:17.9,inner_diameter:124.2,weight:7.96}},
            "180":{"PN6":{SDR:26,thickness:6.9,inner_diameter:166.2,weight:3.79},"PN8":{SDR:21,thickness:8.6,inner_diameter:162.8,weight:4.67},"PN10":{SDR:17,thickness:10.7,inner_diameter:158.6,weight:5.71},"PN12.5":{SDR:13.6,thickness:13.3,inner_diameter:153,weight:6.98},"PN16":{SDR:11,thickness:16.4,inner_diameter:147.2,weight:8.42},"PN20":{SDR:9,thickness:20.1,inner_diameter:139.8,weight:10.1}},
            "200":{"PN6":{SDR:26,thickness:7.7,inner_diameter:184.6,weight:4.69},"PN8":{SDR:21,thickness:9.6,inner_diameter:180.8,weight:5.78},"PN10":{SDR:17,thickness:11.9,inner_diameter:176.2,weight:7.05},"PN12.5":{SDR:13.6,thickness:14.7,inner_diameter:171,weight:8.56},"PN16":{SDR:11,thickness:18.2,inner_diameter:163.6,weight:10.4},"PN20":{SDR:9,thickness:22.4,inner_diameter:155.2,weight:12.4}},
            "225":{"PN6":{SDR:26,thickness:8.6,inner_diameter:207.8,weight:5.89},"PN8":{SDR:21,thickness:10.8,inner_diameter:203.4,weight:7.3},"PN10":{SDR:17,thickness:13.4,inner_diameter:198.2,weight:8.93},"PN12.5":{SDR:13.6,thickness:16.6,inner_diameter:192,weight:10.9},"PN16":{SDR:11,thickness:20.5,inner_diameter:184.1,weight:13.1},"PN20":{SDR:9,thickness:25.2,inner_diameter:174.6,weight:15.8}},
            "250":{"PN6":{SDR:26,thickness:9.6,inner_diameter:230.8,weight:7.3},"PN8":{SDR:21,thickness:11.9,inner_diameter:226.2,weight:8.93},"PN10":{SDR:17,thickness:14.8,inner_diameter:220.4,weight:11},"PN12.5":{SDR:13.6,thickness:18.4,inner_diameter:213,weight:13.4},"PN16":{SDR:11,thickness:22.7,inner_diameter:204.5,weight:16.2},"PN20":{SDR:9,thickness:27.9,inner_diameter:194.2,weight:19.4}},
            "280":{"PN6":{SDR:26,thickness:10.7,inner_diameter:258.6,weight:9.1},"PN8":{SDR:21,thickness:13.8,inner_diameter:253.2,weight:11.3},"PN10":{SDR:17,thickness:16.6,inner_diameter:246.8,weight:13.7},"PN12.5":{SDR:13.6,thickness:20.6,inner_diameter:239,weight:16.8},"PN16":{SDR:11,thickness:25.4,inner_diameter:229.2,weight:20.3},"PN20":{SDR:9,thickness:31.3,inner_diameter:217.4,weight:24.3}},
            "315":{"PN6":{SDR:26,thickness:12.1,inner_diameter:290.8,weight:11.6},"PN8":{SDR:21,thickness:15,inner_diameter:285,weight:14.2},"PN10":{SDR:17,thickness:18.7,inner_diameter:277.6,weight:17.4},"PN12.5":{SDR:13.6,thickness:23.2,inner_diameter:269,weight:21.2},"PN16":{SDR:11,thickness:28.6,inner_diameter:257.7,weight:25.6},"PN20":{SDR:9,thickness:35.2,inner_diameter:244.6,weight:30.8}},
            "355":{"PN6":{SDR:26,thickness:13.6,inner_diameter:327.8,weight:14.6},"PN8":{SDR:21,thickness:16.9,inner_diameter:321.2,weight:18},"PN10":{SDR:17,thickness:21.1,inner_diameter:312.8,weight:22.1},"PN12.5":{SDR:13.6,thickness:26.1,inner_diameter:303,weight:26.9},"PN16":{SDR:11,thickness:32.2,inner_diameter:290.6,weight:32.5},"PN20":{SDR:9,thickness:39.7,inner_diameter:275.6,weight:39.1}},
            "400":{"PN6":{SDR:26,thickness:15.3,inner_diameter:369.4,weight:18.6},"PN8":{SDR:21,thickness:19.1,inner_diameter:361.8,weight:22.9},"PN10":{SDR:17,thickness:23.7,inner_diameter:352.6,weight:28},"PN12.5":{SDR:13.6,thickness:29.4,inner_diameter:341,weight:34.1},"PN16":{SDR:11,thickness:36.3,inner_diameter:327.4,weight:41.3},"PN20":{SDR:9,thickness:44.7,inner_diameter:310.6,weight:49.6}},
            "450":{"PN6":{SDR:26,thickness:17.2,inner_diameter:415.6,weight:23.5},"PN8":{SDR:21,thickness:21.5,inner_diameter:407,weight:28.9},"PN10":{SDR:17,thickness:26.7,inner_diameter:396.6,weight:35.4},"PN12.5":{SDR:13.6,thickness:33.1,inner_diameter:384,weight:43.2},"PN16":{SDR:11,thickness:40.9,inner_diameter:368.2,weight:52.3},"PN20":{SDR:9,thickness:50.3,inner_diameter:349.4,weight:62.7}},
            "500":{"PN6":{SDR:26,thickness:19.1,inner_diameter:461.8,weight:28.9},"PN8":{SDR:21,thickness:23.9,inner_diameter:452.2,weight:35.7},"PN10":{SDR:17,thickness:29.7,inner_diameter:440.6,weight:43.8},"PN12.5":{SDR:13.6,thickness:36.8,inner_diameter:426,weight:53.3},"PN16":{SDR:11,thickness:45.4,inner_diameter:409.2,weight:64.5},"PN20":{SDR:9,thickness:55.8,inner_diameter:388.4,weight:77.3}},
            "560":{"PN6":{SDR:26,thickness:21.4,inner_diameter:517.2,weight:36.2},"PN8":{SDR:21,thickness:26.7,inner_diameter:506.6,weight:44.7},"PN10":{SDR:17,thickness:33.2,inner_diameter:493.6,weight:54.8},"PN12.5":{SDR:13.6,thickness:41.2,inner_diameter:478,weight:66.9},"PN16":{SDR:11,thickness:50.8,inner_diameter:458.4,weight:80.8},"PN20":{SDR:9,thickness:62.5,inner_diameter:435,weight:97}},
            "630":{"PN6":{SDR:26,thickness:24.1,inner_diameter:581.8,weight:45.9},"PN8":{SDR:21,thickness:30,inner_diameter:570,weight:56.4},"PN10":{SDR:17,thickness:37.4,inner_diameter:555.2,weight:69.4},"PN12.5":{SDR:13.6,thickness:46.3,inner_diameter:537,weight:84.6},"PN16":{SDR:11,thickness:57.2,inner_diameter:515.6,weight:102}},
            "710":{"PN6":{SDR:26,thickness:27.2,inner_diameter:655.6,weight:58.4},"PN8":{SDR:21,thickness:33.9,inner_diameter:642.2,weight:71.8},"PN10":{SDR:17,thickness:42.1,inner_diameter:625.8,weight:88.1},"PN12.5":{SDR:13.6,thickness:52.2,inner_diameter:606,weight:107},"PN16":{SDR:11,thickness:64.5,inner_diameter:581,weight:130}},
            "800":{"PN6":{SDR:26,thickness:30.6,inner_diameter:738.8,weight:73.9},"PN8":{SDR:21,thickness:38.1,inner_diameter:723.8,weight:91.1},"PN10":{SDR:17,thickness:47.4,inner_diameter:705.2,weight:112},"PN12.5":{SDR:13.6,thickness:58.8,inner_diameter:682,weight:136},"PN16":{SDR:11,thickness:72.7,inner_diameter:654.6,weight:154}},
            "900":{"PN6":{SDR:26,thickness:34.4,inner_diameter:831.2,weight:93.4},"PN8":{SDR:21,thickness:42.9,inner_diameter:814.2,weight:115},"PN10":{SDR:17,thickness:53.3,inner_diameter:793.4,weight:141},"PN12.5":{SDR:13.6,thickness:66.1,inner_diameter:768,weight:172},"PN16":{SDR:11,thickness:81.8,inner_diameter:736.4,weight:222}},
            "1000":{"PN6":{SDR:26,thickness:38.2,inner_diameter:923.6,weight:115},"PN8":{SDR:21,thickness:47.7,inner_diameter:904.6,weight:142},"PN10":{SDR:17,thickness:59.3,inner_diameter:881.4,weight:175},"PN12.5":{SDR:13.6,thickness:73.5,inner_diameter:853,weight:212},"PN16":{SDR:11,thickness:90.9,inner_diameter:818.2,weight:274}},
            "1200":{"PN6":{SDR:26,thickness:45.9,inner_diameter:1108.2,weight:166},"PN8":{SDR:21,thickness:57.2,inner_diameter:1085.6,weight:205},"PN10":{SDR:17,thickness:70.6,inner_diameter:1058.8,weight:250},"PN12.5":{SDR:13.6,thickness:88.2,inner_diameter:1024,weight:320},"PN16":{SDR:11,thickness:109.1,inner_diameter:981.8,weight:390}}
        }
    },
    UPVC: {
        name: "UPVC (Unplasticized Polyvinyl Chloride)", standard: "DIN 8061/8062",
        diameters: [25,32,40,50,63,75,90,110,125,140,160,200,225,250,280,315,355,400,450,500,630,710,800],
        pressures: ["PN6","PN10","PN16"],
        technicalData: { catalog: "https://www.mediafire.com/file/2pwzsqlih9ho92i/Al-Rowad+UPVC.pdf/file", 
                         technicalSheet: "https://www.mediafire.com/file/v87rcui4layusqp/UPVC+Technical+File+16-6-2026.pdf/file" },
        specs: {
            "25":{"PN10":{thickness:1.5,weight:0.174},"PN16":{thickness:1.9,weight:0.212}},
            "32":{"PN10":{thickness:1.8,weight:0.264},"PN16":{thickness:2.4,weight:0.342}},
            "40":{"PN6":{thickness:1.8,weight:0.334},"PN10":{thickness:1.9,weight:0.350},"PN16":{thickness:3,weight:0.525}},
            "50":{"PN6":{thickness:1.8,weight:0.422},"PN10":{thickness:2.4,weight:0.552},"PN16":{thickness:3.7,weight:0.809}},
            "63":{"PN6":{thickness:1.9,weight:0.562},"PN10":{thickness:3,weight:0.854},"PN16":{thickness:4.7,weight:1.289}},
            "75":{"PN6":{thickness:2.2,weight:0.782},"PN10":{thickness:3.6,weight:1.220},"PN16":{thickness:5.6,weight:1.820}},
            "90":{"PN6":{thickness:2.7,weight:1.130},"PN10":{thickness:4.3,weight:1.750},"PN16":{thickness:6.7,weight:2.610}},
            "110":{"PN6":{thickness:3.2,weight:1.640},"PN10":{thickness:5.3,weight:2.610},"PN16":{thickness:8.2,weight:3.900}},
            "125":{"PN6":{thickness:3.7,weight:2.130},"PN10":{thickness:6,weight:3.340},"PN16":{thickness:9.3,weight:5.010}},
            "140":{"PN6":{thickness:4.1,weight:2.650},"PN10":{thickness:6.7,weight:4.100},"PN16":{thickness:10.4,weight:6.270}},
            "160":{"PN6":{thickness:4.7,weight:3.440},"PN10":{thickness:7.7,weight:5.470},"PN16":{thickness:11.9,weight:8.170}},
            "200":{"PN6":{thickness:5.9,weight:5.370},"PN10":{thickness:9.6,weight:8.510},"PN16":{thickness:14.9,weight:12.800}},
            "225":{"PN6":{thickness:6.6,weight:6.760},"PN10":{thickness:10.8,weight:10.800},"PN16":{thickness:16.7,weight:16.100}},
            "250":{"PN6":{thickness:7.3,weight:8.310},"PN10":{thickness:11.9,weight:13.200},"PN16":{thickness:18.6,weight:19.900}},
            "280":{"PN6":{thickness:8.2,weight:10.400},"PN10":{thickness:13.4,weight:16.600},"PN16":{thickness:20.8,weight:24.900}},
            "315":{"PN6":{thickness:9.2,weight:13.1},"PN10":{thickness:15,weight:20.9},"PN16":{thickness:23.4,weight:31.5}},
            "355":{"PN6":{thickness:10.4,weight:16.7},"PN10":{thickness:16.9,weight:26.5},"PN16":{thickness:26.3,weight:39.9}},
            "400":{"PN6":{thickness:11.7,weight:21.1},"PN10":{thickness:19.1,weight:33.7},"PN16":{thickness:29.7,weight:50.8}},
            "450":{"PN6":{thickness:13.2,weight:26.8},"PN10":{thickness:21.5,weight:42.7}},
            "500":{"PN6":{thickness:14.6,weight:32.9},"PN10":{thickness:23.9,weight:52.6}},
            "630":{"PN6":{thickness:18.4,weight:52.2},"PN10":{thickness:30,weight:83.2}},
            "710":{"PN6":{thickness:20.7,weight:66.1}},
            "800":{"PN6":{thickness:23.3,weight:83.9}}
        }
    },
    PPR: {
        name: "PPR (Polypropylene Random Copolymer)", standard: "DIN 8077/8078",
        diameters: [20,25,32,40,50,63,75,90,110], pressures: ["PN10","PN16","PN20","PN25"],
        technicalData: { catalog: "https://www.mediafire.com/file/7fafq8my2mjv3ci/Al-Rowad+PPR.pdf/file", 
                         technicalSheet: "https://www.mediafire.com/file/0xc9z4ek02pvwdm/Technical+File+PPR-PPH+16-6-2026.pdf/file" },
        specs: {
            "20":{"PN10":{thickness:1.9,inner_diameter:16.2,weight:0.107},"PN16":{thickness:2.8,inner_diameter:14.4,weight:0.148},"PN20":{thickness:3.4,inner_diameter:13.2,weight:0.172},"PN25":{thickness:4.1,inner_diameter:11.8,weight:0.198}},
            "25":{"PN10":{thickness:2.3,inner_diameter:20.4,weight:0.164},"PN16":{thickness:3.5,inner_diameter:18,weight:0.230},"PN20":{thickness:4.2,inner_diameter:16.6,weight:0.266},"PN25":{thickness:5.1,inner_diameter:14.8,weight:0.307}},
            "32":{"PN10":{thickness:2.9,inner_diameter:26.6,weight:0.261},"PN16":{thickness:4.4,inner_diameter:23.2,weight:0.370},"PN20":{thickness:5.4,inner_diameter:21.2,weight:0.434},"PN25":{thickness:6.5,inner_diameter:19,weight:0.498}},
            "40":{"PN10":{thickness:3.7,inner_diameter:32.6,weight:0.412},"PN16":{thickness:5.5,inner_diameter:29,weight:0.575},"PN20":{thickness:6.7,inner_diameter:26.6,weight:0.671},"PN25":{thickness:8.1,inner_diameter:23.8,weight:0.775}},
            "50":{"PN10":{thickness:4.6,inner_diameter:40.8,weight:0.638},"PN16":{thickness:6.9,inner_diameter:36.2,weight:0.896},"PN20":{thickness:8.3,inner_diameter:33.4,weight:1.040},"PN25":{thickness:10.1,inner_diameter:29.8,weight:1.210}},
            "63":{"PN10":{thickness:5.8,inner_diameter:51.4,weight:1.010},"PN16":{thickness:8.6,inner_diameter:45.8,weight:1.410},"PN20":{thickness:10.5,inner_diameter:42,weight:1.650},"PN25":{thickness:12.7,inner_diameter:37.6,weight:1.910}},
            "75":{"PN10":{thickness:6.8,inner_diameter:61.4,weight:1.410},"PN16":{thickness:10.3,inner_diameter:54.4,weight:2.010},"PN20":{thickness:12.5,inner_diameter:50,weight:2.340},"PN25":{thickness:15.1,inner_diameter:44.8,weight:2.7}},
            "90":{"PN10":{thickness:8.2,inner_diameter:73.6,weight:2.030},"PN16":{thickness:12.3,inner_diameter:65.4,weight:2.870},"PN20":{thickness:15,inner_diameter:60,weight:3.360},"PN25":{thickness:18.1,inner_diameter:53.8,weight:3.880}},
            "110":{"PN10":{thickness:10,inner_diameter:90,weight:3.010},"PN16":{thickness:15.1,inner_diameter:79.8,weight:4.3},"PN20":{thickness:18.3,inner_diameter:73.4,weight:5.010},"PN25":{thickness:22.1,inner_diameter:65.8,weight:5.780}}
        }
    },
    PPH: {
        name: "PPH (Polypropylene Homopolymer)", standard: "Special S Series",
        diameters: [32,50,63,75,110,160], sSeries: ["S 14","S 16","S 20"],
        technicalData: { catalog: "https://www.mediafire.com/file/4etzc6qawb94b82/AL-Rowad+PPH.pdf/file",
                         technicalSheet: "https://www.mediafire.com/file/0xc9z4ek02pvwdm/Technical+File+PPR-PPH+16-6-2026.pdf/file" },
        specs: {
            "32":{"S 16":{thickness:2.2}},
            "50":{"S 16":{thickness:1.8}},
            "63":{"S 14":{thickness:2.5}},
            "75":{"S 14":{thickness:2.9},"S 20":{thickness:1.9}},
            "110":{"S 20":{thickness:2.7},"S 14":{thickness:4.1}},
            "160":{"S 20":{thickness:3.9}}
        }
    }
};

const pipeTypeSelect       = document.getElementById('pipeType');
const pipeDetailsDiv       = document.getElementById('pipeDetails');
const selectedPipeTypeH3   = document.getElementById('selectedPipeType');
const diameterSelect       = document.getElementById('diameter');
const pressureSelect       = document.getElementById('pressure');
const pressureLabelEl      = document.getElementById('pressureLabel');
const resultDiv            = document.getElementById('result');
const tableBody            = document.getElementById('tableBody');
const imageBox             = document.getElementById('diagramImageBox');
const pricingSection       = document.getElementById('pricingSection');
const priceInputContainer  = document.getElementById('priceInputContainer');
const technicalDataContainer = document.getElementById('technicalDataContainer');
const technicalDataBtn     = document.getElementById('technicalDataBtn');
const fittingsBtn          = document.getElementById('fittingsBtn');
const toolsDropdownWrapper = document.getElementById('toolsDropdownWrapper');
const toolsBtn              = document.getElementById('toolsBtn');
const toolsDropdownMenu     = document.getElementById('toolsDropdownMenu');
const toolModalOverlay      = document.getElementById('toolModalOverlay');
const toolModalTitle        = document.getElementById('toolModalTitle');
const toolModalBody         = document.getElementById('toolModalBody');
const toolModalClose        = document.getElementById('toolModalClose');
const addToQuoteBtnWrapper = document.getElementById('addToQuoteBtnWrapper');
const addToQuoteBtn        = document.getElementById('addToQuoteBtn');
const quotationSection     = document.getElementById('quotationSection');
const quotationTableBody   = document.getElementById('quotationTableBody');
const hdpeBackground = document.getElementById('hdpeBackground');
const upvcBackground = document.getElementById('upvcBackground');
const pprBackground  = document.getElementById('pprBackground');
const pphBackground  = document.getElementById('pphBackground');

let currentPriceInput    = null;
let currentQuantityInput = null;
let currentPipeType      = null;

let quotationItems = []; // [{pipeType, diameter, standard, pricePerMeter, qty, total, description}]

pipeTypeSelect.addEventListener('change', handlePipeTypeChange);
diameterSelect.addEventListener('change', handleDiameterChange);
pressureSelect.addEventListener('change', handlePressureChange);
technicalDataBtn.addEventListener('click', handleTechnicalDataClick);
fittingsBtn.addEventListener('click', handleFittingsClick);
addToQuoteBtn.addEventListener('click', addToQuotation);

toolsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toolsDropdownWrapper.classList.toggle('open');
    toolsDropdownMenu.classList.toggle('hidden');
});
document.addEventListener('click', (e) => {
    if (!toolsDropdownWrapper.contains(e.target)) {
        toolsDropdownWrapper.classList.remove('open');
        toolsDropdownMenu.classList.add('hidden');
    }
});
document.querySelectorAll('.tools-dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
        toolsDropdownWrapper.classList.remove('open');
        toolsDropdownMenu.classList.add('hidden');
        openTool(item.dataset.tool);
    });
});
toolModalClose.addEventListener('click', closeToolModal);
toolModalOverlay.addEventListener('click', (e) => { if (e.target === toolModalOverlay) closeToolModal(); });

function showErrorMessage(msg) {
    const e = document.querySelector('.error-message');
    if (e) e.remove();
    const d = document.createElement('div');
    d.className = 'error-message';
    d.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${msg}`;
    document.body.appendChild(d);
    setTimeout(() => { if (d.parentNode) d.parentNode.removeChild(d); }, 5000);
}

function showSuccessToast(msg) {
    const e = document.querySelector('.success-toast');
    if (e) e.remove();
    const d = document.createElement('div');
    d.className = 'success-toast';
    d.innerHTML = `<i class="fas fa-check-circle"></i> ${msg}`;
    document.body.appendChild(d);
    setTimeout(() => { if (d.parentNode) d.parentNode.removeChild(d); }, 3000);
}

function fmtNumber(n, dec = 2) {
    return parseFloat(n).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });
}

function hideResults() {
    resultDiv.classList.remove('show');
    imageBox.classList.remove('show');
    tableBody.innerHTML = '';
    addToQuoteBtnWrapper.style.display = 'none';
}

function changeBackground(pipeType) {
    [hdpeBackground, upvcBackground, pprBackground, pphBackground].forEach(b => b.classList.remove('active','hdpe-fallback','upvc-fallback','ppr-fallback','pph-fallback'));
    const map = { HDPE: [hdpeBackground, 'https://misrelhegaz.com/ar/wp-content/uploads/2020/08/HDPE-Pipes.jpg', 'hdpe-fallback'],
                  UPVC: [upvcBackground, 'https://nile-drip.com/wp-content/uploads/2023/07/nile-drip-pipes-%D9%85%D9%88%D8%A7%D8%B3%D9%8A%D8%B1-%D8%B5%D8%B1%D9%81-%D8%B5%D8%AD%D9%8A-%D9%86%D8%A7%D9%8A%D9%84-%D8%AF%D8%B1%D9%8A%D8%A8-Niledrip-hwa-1024x729.jpg', 'upvc-fallback'],
                  PPR: [pprBackground, 'https://misrelhegaz.com/ar/wp-content/uploads/2020/08/Main-Image.jpg', 'ppr-fallback'],
                  PPH: [pphBackground, 'https://image2url.com/r2/default/images/1770106809713-b43029d8-a8df-4a55-9e5b-34a2ba8c745a.jpg', 'pph-fallback'] };
    if (map[pipeType]) {
        const [el, src, fallback] = map[pipeType];
        const img = new Image();
        img.onload = () => el.classList.add('active');
        img.onerror = () => el.classList.add(fallback, 'active');
        img.src = src;
    }
}

function handlePipeTypeChange() {
    const sel = pipeTypeSelect.value;
    if (sel) {
        changeBackground(sel);
        if (currentPipeType) {
            pipeDetailsDiv.classList.add('fade-out');
            setTimeout(() => { updatePipeDetails(sel); pipeDetailsDiv.classList.remove('fade-out'); pipeDetailsDiv.classList.add('fade-in'); setTimeout(() => pipeDetailsDiv.classList.remove('fade-in'), 500); }, 300);
        } else { updatePipeDetails(sel); }
    } else {
        pipeDetailsDiv.classList.add('hidden');
        technicalDataContainer.classList.add('hidden');
        pricingSection.classList.add('hidden');
        currentPriceInput = null; currentQuantityInput = null; currentPipeType = null;
        hideResults();
        [hdpeBackground, upvcBackground, pprBackground, pphBackground].forEach(b => b.classList.remove('active'));
    }
}

function updatePipeDetails(sel) {
    currentPipeType = sel;
    pipeDetailsDiv.classList.remove('hidden');
    selectedPipeTypeH3.textContent = pipeSpecs[sel].name;
    document.querySelector('.pipe-type').classList.add('show');
    technicalDataContainer.classList.remove('hidden');
    technicalDataContainer.classList.add('show');
    fittingsBtn.classList.toggle('hidden', sel !== 'HDPE');
    toolsDropdownWrapper.classList.toggle('hidden', sel === 'PPH');

    if (sel === 'HDPE' || sel === 'UPVC') {
        pricingSection.classList.remove('hidden');
        pricingSection.classList.add('show');
        priceInputContainer.innerHTML = '';

        // Price per Ton
        const pDiv = document.createElement('div'); pDiv.className = 'price-input-container';
        const pLbl = document.createElement('label'); pLbl.textContent = `${sel} Price per Ton (EGP):`;
        const pInp = document.createElement('input'); pInp.type = 'number'; pInp.id = `${sel.toLowerCase()}Price`; pInp.placeholder = `Enter ${sel} price per ton`; pInp.min = '0'; pInp.step = '1';
        pInp.addEventListener('input', handlePriceChange); currentPriceInput = pInp;
        pDiv.appendChild(pLbl); pDiv.appendChild(pInp); priceInputContainer.appendChild(pDiv);

        // Quantity
        const qDiv = document.createElement('div'); qDiv.className = 'price-input-container';
        const qLbl = document.createElement('label'); qLbl.textContent = 'Quantity (meters):';
        const qInp = document.createElement('input'); qInp.type = 'number'; qInp.id = `${sel.toLowerCase()}Quantity`; qInp.placeholder = 'Enter quantity in meters'; qInp.min = '0'; qInp.step = '1';
        qInp.addEventListener('input', handlePriceChange); currentQuantityInput = qInp;
        qDiv.appendChild(qLbl); qDiv.appendChild(qInp); priceInputContainer.appendChild(qDiv);
    } else {
        pricingSection.classList.add('hidden');
        currentPriceInput = null; currentQuantityInput = null;
    }

    pressureLabelEl.textContent = sel === 'PPH' ? 'Select S Series' : 'Select Pressure (PN)';
    populateDiameterDropdown(sel);
    hideResults();
    pressureSelect.innerHTML = '<option value="">-- Choose Standard --</option>';
}

function populateDiameterDropdown(pt) {
    diameterSelect.innerHTML = '<option value="">-- Choose Diameter --</option>';
    pipeSpecs[pt].diameters.forEach(d => {
        const o = document.createElement('option'); o.value = d; o.textContent = `${d} mm`; diameterSelect.appendChild(o);
    });
}

function handleDiameterChange() {
    const pt = pipeTypeSelect.value, d = diameterSelect.value;
    if (d) { populatePressureDropdown(pt, d); hideResults(); }
    else { pressureSelect.innerHTML = '<option value="">-- Choose Standard --</option>'; hideResults(); }
}

function populatePressureDropdown(pt, d) {
    pressureSelect.innerHTML = '<option value="">-- Choose Standard --</option>';
    const s = pipeSpecs[pt].specs[d];
    if (s) Object.keys(s).forEach(k => { const o = document.createElement('option'); o.value = k; o.textContent = k; pressureSelect.appendChild(o); });
}

function handlePressureChange() {
    const pt = pipeTypeSelect.value, d = diameterSelect.value, s = pressureSelect.value;
    if (pt && d && s) {
        resultDiv.classList.remove('hidden'); resultDiv.classList.add('show');
        populateSpecTable(pt, d, s);
        setTimeout(() => { if (pt !== 'PPH') { imageBox.style.display = 'block'; imageBox.classList.add('show'); } }, 300);
    } else { hideResults(); }
}

function handlePriceChange() {
    const pt = pipeTypeSelect.value, d = diameterSelect.value, s = pressureSelect.value;
    if (pt && d && s) populateSpecTable(pt, d, s);
}

function calcPricePerMeter(weight) {
    const ton = currentPriceInput ? (parseFloat(currentPriceInput.value) || 0) : 0;
    return ((ton / 1000) * weight);
}

function populateSpecTable(pt, diameter, standard) {
    tableBody.innerHTML = '';
    const specs = pipeSpecs[pt].specs[diameter][standard];
    const rows = [
        { label: 'OD-DIAMETER (mm)', value: diameter },
        { label: 'STANDARD', value: standard }
    ];

    if (pt === 'PPH') {
        rows.push({ label: 'THICKNESS (mm)', value: specs.thickness });
    } else {
        if (pt === 'HDPE') rows.push({ label: 'SDR', value: specs.SDR });
        if (pt === 'UPVC') {
            rows.push({ label: 'THICKNESS (mm)', value: specs.thickness }, { label: 'WEIGHT (kg/m)', value: specs.weight });
        } else {
            rows.push({ label: 'THICKNESS (mm)', value: specs.thickness }, { label: 'ID-INNER DIAMETER (mm)', value: specs.inner_diameter }, { label: 'WEIGHT (kg/m)', value: specs.weight });
        }

        if (pt === 'HDPE' || pt === 'UPVC') {
            const ppm = calcPricePerMeter(specs.weight);
            rows.push({ label: 'PRICE/m (EGP)', value: ppm.toFixed(4), isPrice: true });
            const qty = currentQuantityInput ? (parseFloat(currentQuantityInput.value) || 0) : 0;
            if (qty > 0 && ppm > 0) {
                rows.push(
                    { label: 'QUANTITY (m)', value: qty, isQuantity: true },
                    { label: 'TOTAL (EGP) incl. Tax', value: (ppm * qty).toFixed(2), isTotal: true }
                );
            }
        }
    }

    rows.forEach((r, i) => {
        const tr = document.createElement('tr');
        if (r.isPrice) tr.classList.add('price-row');
        if (r.isTotal) tr.classList.add('total-row');
        const th = document.createElement('th'); th.textContent = r.label; tr.appendChild(th);
        const td = document.createElement('td'); td.textContent = r.value;
        if (r.isPrice) { const n = document.createElement('div'); n.className = 'price-note'; n.textContent = '(Price includes tax)'; td.appendChild(n); }
        tr.appendChild(td);
        tr.style.animation = `fadeIn 0.5s ease-out ${i * 0.1}s forwards`;
        tr.style.opacity = '0';
        tableBody.appendChild(tr);
    });

    document.querySelector('.table-container').classList.add('show');

    if ((pt === 'HDPE' || pt === 'UPVC') && currentPriceInput) {
        const ppm = calcPricePerMeter(specs.weight);
        const qty = currentQuantityInput ? (parseFloat(currentQuantityInput.value) || 0) : 0;
        addToQuoteBtnWrapper.style.display = (ppm > 0 && qty > 0) ? 'flex' : 'none';
    } else {
        addToQuoteBtnWrapper.style.display = 'none';
    }
}

function addToQuotation() {
    const pt = pipeTypeSelect.value;
    const diameter = diameterSelect.value;
    const standard = pressureSelect.value;
    if (!pt || !diameter || !standard) { showErrorMessage('Please select all fields first.'); return; }
    const specs = pipeSpecs[pt].specs[diameter][standard];
    const ppm = calcPricePerMeter(specs.weight);
    const qty = currentQuantityInput ? (parseFloat(currentQuantityInput.value) || 0) : 0;
    if (ppm <= 0) { showErrorMessage('Please enter a valid price per ton.'); return; }
    if (qty <= 0) { showErrorMessage('Please enter a valid quantity.'); return; }

    const pressureDisplay = standard.replace('PN', '') + ' bar';
    const description = `${pt} Pipe ${diameter} mm – ${pressureDisplay}`;
    const total = ppm * qty;

    const dupIdx = quotationItems.findIndex(it => it.pipeType === pt && it.diameter === diameter && it.standard === standard);
    if (dupIdx !== -1) {
        // Update existing
        quotationItems[dupIdx] = { pipeType: pt, diameter, standard, ppm, qty, total, description };
        showSuccessToast('Item updated in quotation.');
    } else {
        quotationItems.push({ pipeType: pt, diameter, standard, ppm, qty, total, description });
        showSuccessToast('Item added to quotation!');
    }

    renderQuotationTable();

    if (currentQuantityInput) { currentQuantityInput.value = ''; }
    hideResults();
    resultDiv.classList.add('hidden');
}

function renderQuotationTable() {
    if (quotationItems.length === 0) {
        quotationSection.classList.add('hidden');
        return;
    }
    quotationSection.classList.remove('hidden');
    quotationTableBody.innerHTML = '';

    let grandTotal = 0;
    quotationItems.forEach((item, idx) => {
        grandTotal += item.total;
        const tr = document.createElement('tr');
        tr.style.animation = `fadeIn 0.4s ease-out forwards`;
        tr.innerHTML = `
            <td class="item-num-col"><strong>${idx + 1}</strong></td>
            <td class="item-desc">${item.description}</td>
            <td>${fmtNumber(item.qty, 0)}</td>
            <td class="item-amount">EGP ${fmtNumber(item.ppm, 4)}</td>
            <td class="item-total">EGP ${fmtNumber(item.total, 2)}</td>
            <td><button class="delete-item-btn" title="Remove item" onclick="removeQuotationItem(${idx})"><i class="fas fa-trash"></i></button></td>
        `;
        quotationTableBody.appendChild(tr);
    });

    const gtr = document.createElement('tr');
    gtr.className = 'grand-total-row';
    gtr.innerHTML = `
        <td colspan="4" style="text-align:right; font-weight:800; letter-spacing:0.5px;">GRAND TOTAL (incl. Tax)</td>
        <td class="item-total" style="font-size:1.1rem;">EGP ${fmtNumber(grandTotal, 2)}</td>
        <td></td>
    `;
    quotationTableBody.appendChild(gtr);

    setTimeout(() => { quotationSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 200);
}

function removeQuotationItem(idx) {
    quotationItems.splice(idx, 1);
    renderQuotationTable();
}

function clearQuotation() {
    if (quotationItems.length === 0) return;
    if (confirm('Clear all quotation items?')) {
        quotationItems = [];
        renderQuotationTable();
    }
}

function generateQuotationPDF() {
    if (quotationItems.length === 0) { showErrorMessage('Quotation is empty.'); return; }

    const today = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
    const logoSrc = 'https://image2url.com/r2/default/images/1770041250310-ad4260b4-cad5-4916-b71b-3c58d5dc968a.png';

    let grandTotal = 0;
    let rowsHtml = '';
    quotationItems.forEach((item, idx) => {
        grandTotal += item.total;
        const bg = idx % 2 === 1 ? 'background-color:#f8f9fa;' : '';
        rowsHtml += `
            <tr>
                <td style="${bg}text-align:center;">${idx + 1}</td>
                <td style="${bg}font-weight:600;">${item.description}</td>
                <td style="${bg}text-align:right;">${fmtNumber(item.qty, 0)}</td>
                <td style="${bg}text-align:right;">${fmtNumber(item.ppm, 4)}</td>
                <td style="${bg}text-align:right;font-weight:700;color:#1a5e2e;">EGP ${fmtNumber(item.total, 2)}</td>
            </tr>`;
    });

    const printArea = document.getElementById('printArea');
    printArea.innerHTML = `
        <div class="pdf-header">
            <img src="${logoSrc}" class="pdf-logo" alt="Al Rowad Logo">
            <div class="pdf-company-info">
                <h2>Al Rowad for Plastic Pipes</h2>
                <p>Professional Pipe Specifications</p>
                <p>Date: ${today}</p>
            </div>
        </div>
        <div class="pdf-title">Price Quotation</div>
        <table class="pdf-table">
            <thead>
                <tr>
                    <th style="width:40px;text-align:center;">#</th>
                    <th>Description</th>
                    <th style="text-align:right;white-space:nowrap;">Qty (m)</th>
                    <th style="text-align:right;white-space:nowrap;">Unit Price (EGP/m)</th>
                    <th style="text-align:right;white-space:nowrap;">Total (EGP) incl. Tax</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHtml}
                <tr class="pdf-grand-total">
                    <td colspan="4" style="text-align:right;font-weight:800;letter-spacing:0.5px;">GRAND TOTAL (incl. Tax)</td>
                    <td style="text-align:right;font-weight:800;font-size:1.05rem;">EGP ${fmtNumber(grandTotal, 2)}</td>
                </tr>
            </tbody>
        </table>
        <div class="pdf-note">* All prices include applicable taxes. This quotation is generated automatically from Al Rowad Pipe Specs Calculator.</div>
        <div class="pdf-footer">Al Rowad for Plastic Pipes &nbsp;|&nbsp; PIPE SPECS &nbsp;|&nbsp; Created by ENG. AHMED MEHESIN &copy; 2025</div>
    `;

    window.print();
}

function openToolModal(title) {
    toolModalTitle.textContent = title;
    toolModalOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeToolModal() {
    toolModalOverlay.classList.add('hidden');
    document.body.style.overflow = '';
    toolModalBody.innerHTML = '';
}

function openTool(toolKey) {
    if (toolKey === 'flow') buildFlowCalculator();
    else if (toolKey === 'comparison') buildPipeComparison();
    else if (toolKey === 'unit') buildUnitConverter();
    else if (toolKey === 'pressure') buildPressureLoss();
}

function currentDiametersForType(pt) {
    return pipeSpecs[pt] && pipeSpecs[pt].diameters ? pipeSpecs[pt].diameters : [];
}

function getInnerDiameterMM(pt, diameter) {
    if (!currentPipeType && !pt) return null;
    const type = pt || currentPipeType;
    if (!type || type === 'PPH') return null;
    const dKey = String(diameter);
    const specsForD = pipeSpecs[type].specs[dKey];
    if (!specsForD) return null;
    const firstStd = Object.keys(specsForD)[0];
    const s = specsForD[firstStd];
    if (s.inner_diameter) return s.inner_diameter;
    if (s.thickness) return diameter - 2 * s.thickness;
    return null;
}

function buildFlowCalculator() {
    openToolModal('Flow Calculator');
    const typeOptions = Object.keys(pipeSpecs).filter(k => k !== 'PPH')
        .map(k => `<option value="${k}">${k}</option>`).join('');
    toolModalBody.innerHTML = `
        <div class="tool-form-group">
            <label>Pipe Type</label>
            <select id="flowPipeType">${typeOptions}</select>
        </div>
        <div class="tool-form-group">
            <label>Diameter (mm)</label>
            <select id="flowDiameter"></select>
        </div>
        <div class="tool-form-group">
            <label>Flow Velocity (m/s)</label>
            <input type="number" id="flowVelocity" placeholder="e.g. 1.5" step="0.1" min="0" value="1.5">
        </div>
        <button class="tool-calc-btn" id="flowCalcBtn"><i class="fas fa-calculator"></i> Calculate Flow Rate</button>
        <div class="tool-result-box" id="flowResultBox"></div>
        <div class="tool-note">Calculation based on internal diameter for the selected pipe size and the first available pressure rating. Flow rate Q = A × V, where A is the internal cross-sectional area.</div>
    `;
    const typeSel = document.getElementById('flowPipeType');
    const diaSel  = document.getElementById('flowDiameter');
    function fillDiameters() {
        diaSel.innerHTML = currentDiametersForType(typeSel.value).map(d => `<option value="${d}">${d} mm</option>`).join('');
    }
    typeSel.addEventListener('change', fillDiameters);
    fillDiameters();
    document.getElementById('flowCalcBtn').addEventListener('click', () => {
        const pt = typeSel.value;
        const d = parseFloat(diaSel.value);
        const v = parseFloat(document.getElementById('flowVelocity').value);
        const box = document.getElementById('flowResultBox');
        if (!d || !v || v <= 0) { box.classList.remove('show'); showErrorMessage('Please enter a valid velocity.'); return; }
        const idMM = getInnerDiameterMM(pt, d);
        if (!idMM) { showErrorMessage('No data available for this size.'); return; }
        const idM = idMM / 1000;
        const areaM2 = Math.PI * Math.pow(idM / 2, 2);
        const qM3s = areaM2 * v;
        const qLs  = qM3s * 1000;
        const qM3h = qM3s * 3600;
        box.innerHTML = `
            <div class="result-line"><span>Internal Diameter</span><span class="val">${idMM.toFixed(1)} mm</span></div>
            <div class="result-line"><span>Cross-Section Area</span><span class="val">${(areaM2 * 1e6).toFixed(1)} mm²</span></div>
            <div class="result-line highlight"><span>Flow Rate</span><span class="val">${qLs.toFixed(2)} L/s</span></div>
            <div class="result-line"><span>Flow Rate</span><span class="val">${qM3h.toFixed(2)} m³/h</span></div>
        `;
        box.classList.add('show');
    });
}

function buildPipeComparison() {
    openToolModal('Pipe Comparison');
    const typeOptions = Object.keys(pipeSpecs).filter(k => k !== 'PPH')
        .map(k => `<option value="${k}">${k}</option>`).join('');
    toolModalBody.innerHTML = `
        <div class="tool-row">
            <div class="tool-form-group">
                <label>Pipe A — Type</label>
                <select id="cmpTypeA">${typeOptions}</select>
            </div>
            <div class="tool-form-group">
                <label>Pipe B — Type</label>
                <select id="cmpTypeB">${typeOptions}</select>
            </div>
        </div>
        <div class="tool-row">
            <div class="tool-form-group">
                <label>Pipe A — Diameter</label>
                <select id="cmpDiaA"></select>
            </div>
            <div class="tool-form-group">
                <label>Pipe B — Diameter</label>
                <select id="cmpDiaB"></select>
            </div>
        </div>
        <div class="tool-row">
            <div class="tool-form-group">
                <label>Pipe A — Standard</label>
                <select id="cmpStdA"></select>
            </div>
            <div class="tool-form-group">
                <label>Pipe B — Standard</label>
                <select id="cmpStdB"></select>
            </div>
        </div>
        <button class="tool-calc-btn" id="cmpCalcBtn"><i class="fas fa-balance-scale"></i> Compare</button>
        <div class="tool-compare-grid hidden" id="cmpResultGrid"></div>
    `;
    function wireSide(suffix) {
        const typeSel = document.getElementById('cmpType' + suffix);
        const diaSel  = document.getElementById('cmpDia' + suffix);
        const stdSel  = document.getElementById('cmpStd' + suffix);
        function fillDia() {
            diaSel.innerHTML = currentDiametersForType(typeSel.value).map(d => `<option value="${d}">${d} mm</option>`).join('');
            fillStd();
        }
        function fillStd() {
            const specsForD = pipeSpecs[typeSel.value].specs[diaSel.value];
            stdSel.innerHTML = specsForD ? Object.keys(specsForD).map(s => `<option value="${s}">${s}</option>`).join('') : '';
        }
        typeSel.addEventListener('change', fillDia);
        diaSel.addEventListener('change', fillStd);
        fillDia();
    }
    wireSide('A');
    wireSide('B');

    document.getElementById('cmpCalcBtn').addEventListener('click', () => {
        const grid = document.getElementById('cmpResultGrid');
        const sides = ['A', 'B'].map(s => {
            const pt = document.getElementById('cmpType' + s).value;
            const d  = document.getElementById('cmpDia' + s).value;
            const std = document.getElementById('cmpStd' + s).value;
            const specs = pipeSpecs[pt].specs[d] && pipeSpecs[pt].specs[d][std];
            return { pt, d, std, specs };
        });
        if (!sides[0].specs || !sides[1].specs) { showErrorMessage('Please complete both selections.'); return; }
        grid.innerHTML = sides.map(side => {
            const sp = side.specs;
            let rows = `<div class="cmp-row"><span>OD</span><span>${side.d} mm</span></div>`;
            rows += `<div class="cmp-row"><span>Standard</span><span>${side.std}</span></div>`;
            if (sp.SDR) rows += `<div class="cmp-row"><span>SDR</span><span>${sp.SDR}</span></div>`;
            if (sp.thickness) rows += `<div class="cmp-row"><span>Thickness</span><span>${sp.thickness} mm</span></div>`;
            if (sp.inner_diameter) rows += `<div class="cmp-row"><span>Inner Diameter</span><span>${sp.inner_diameter} mm</span></div>`;
            if (sp.weight) rows += `<div class="cmp-row"><span>Weight</span><span>${sp.weight} kg/m</span></div>`;
            return `<div class="tool-compare-col"><h4>${side.pt} — ${side.d}mm</h4>${rows}</div>`;
        }).join('');
        grid.classList.remove('hidden');
    });
}

const unitConversions = {
    length: { units: { mm: 1, cm: 10, m: 1000, inch: 25.4, ft: 304.8 }, label: 'Length' },
    pressure: { units: { bar: 1, psi: 0.0689476, kPa: 0.01, MPa: 10 }, label: 'Pressure' },
    weight: { units: { kg: 1, g: 0.001, lb: 0.453592, ton: 1000 }, label: 'Weight' }
};
function buildUnitConverter() {
    openToolModal('Unit Converter');
    toolModalBody.innerHTML = `
        <div class="tool-form-group">
            <label>Category</label>
            <select id="unitCategory">
                <option value="length">Length (mm, cm, m, inch, ft)</option>
                <option value="pressure">Pressure (bar, psi, kPa, MPa)</option>
                <option value="weight">Weight (kg, g, lb, ton)</option>
            </select>
        </div>
        <div class="tool-row">
            <div class="tool-form-group">
                <label>From</label>
                <select id="unitFrom"></select>
            </div>
            <div class="tool-form-group">
                <label>To</label>
                <select id="unitTo"></select>
            </div>
        </div>
        <div class="tool-form-group">
            <label>Value</label>
            <input type="number" id="unitValue" placeholder="Enter value" step="any" value="1">
        </div>
        <button class="tool-calc-btn" id="unitCalcBtn"><i class="fas fa-exchange-alt"></i> Convert</button>
        <div class="tool-result-box" id="unitResultBox"></div>
    `;
    const catSel = document.getElementById('unitCategory');
    const fromSel = document.getElementById('unitFrom');
    const toSel = document.getElementById('unitTo');
    function fillUnits() {
        const units = Object.keys(unitConversions[catSel.value].units);
        fromSel.innerHTML = units.map(u => `<option value="${u}">${u}</option>`).join('');
        toSel.innerHTML = units.map(u => `<option value="${u}">${u}</option>`).join('');
        toSel.selectedIndex = units.length > 1 ? 1 : 0;
    }
    catSel.addEventListener('change', fillUnits);
    fillUnits();
    document.getElementById('unitCalcBtn').addEventListener('click', () => {
        const val = parseFloat(document.getElementById('unitValue').value);
        const box = document.getElementById('unitResultBox');
        if (isNaN(val)) { showErrorMessage('Please enter a valid number.'); return; }
        const factors = unitConversions[catSel.value].units;
        const baseVal = val * factors[fromSel.value];
        const result = baseVal / factors[toSel.value];
        box.innerHTML = `
            <div class="result-line highlight"><span>${val} ${fromSel.value} =</span><span class="val">${result.toLocaleString('en-US', {maximumFractionDigits: 6})} ${toSel.value}</span></div>
        `;
        box.classList.add('show');
    });
}

function buildPressureLoss() {
    openToolModal('Pressure Loss Calculator');
    const typeOptions = Object.keys(pipeSpecs).filter(k => k !== 'PPH')
        .map(k => `<option value="${k}">${k}</option>`).join('');
    toolModalBody.innerHTML = `
        <div class="tool-row">
            <div class="tool-form-group">
                <label>Pipe Type</label>
                <select id="plPipeType">${typeOptions}</select>
            </div>
            <div class="tool-form-group">
                <label>Diameter (mm)</label>
                <select id="plDiameter"></select>
            </div>
        </div>
        <div class="tool-row">
            <div class="tool-form-group">
                <label>Flow Rate (L/s)</label>
                <input type="number" id="plFlow" placeholder="e.g. 10" step="0.1" min="0" value="10">
            </div>
            <div class="tool-form-group">
                <label>Pipe Length (m)</label>
                <input type="number" id="plLength" placeholder="e.g. 100" step="1" min="0" value="100">
            </div>
        </div>
        <button class="tool-calc-btn" id="plCalcBtn"><i class="fas fa-tachometer-alt"></i> Calculate Pressure Loss</button>
        <div class="tool-result-box" id="plResultBox"></div>
        <div class="tool-note">Estimated using the Hazen-Williams formula (C = 150, typical for new plastic pipe). Results are indicative — for final hydraulic design, consult full project calculations.</div>
    `;
    const typeSel = document.getElementById('plPipeType');
    const diaSel = document.getElementById('plDiameter');
    function fillDiameters() {
        diaSel.innerHTML = currentDiametersForType(typeSel.value).map(d => `<option value="${d}">${d} mm</option>`).join('');
    }
    typeSel.addEventListener('change', fillDiameters);
    fillDiameters();
    document.getElementById('plCalcBtn').addEventListener('click', () => {
        const pt = typeSel.value;
        const d = parseFloat(diaSel.value);
        const qLs = parseFloat(document.getElementById('plFlow').value);
        const length = parseFloat(document.getElementById('plLength').value);
        const box = document.getElementById('plResultBox');
        if (!d || !qLs || qLs <= 0 || !length || length <= 0) { showErrorMessage('Please enter valid flow and length values.'); return; }
        const idMM = getInnerDiameterMM(pt, d);
        if (!idMM) { showErrorMessage('No data available for this size.'); return; }
        const idM = idMM / 1000;
        const qM3s = qLs / 1000;
        const C = 150;
        const hfPerM = 10.67 * Math.pow(qM3s, 1.852) / (Math.pow(C, 1.852) * Math.pow(idM, 4.8704));
        const hfTotal = hfPerM * length;
        const areaM2 = Math.PI * Math.pow(idM / 2, 2);
        const velocity = qM3s / areaM2;
        box.innerHTML = `
            <div class="result-line"><span>Internal Diameter</span><span class="val">${idMM.toFixed(1)} mm</span></div>
            <div class="result-line"><span>Velocity</span><span class="val">${velocity.toFixed(2)} m/s</span></div>
            <div class="result-line"><span>Head Loss / 100m</span><span class="val">${(hfPerM * 100).toFixed(3)} m</span></div>
            <div class="result-line highlight"><span>Total Head Loss (${length}m)</span><span class="val">${hfTotal.toFixed(3)} m</span></div>
            <div class="result-line"><span>Total Pressure Loss</span><span class="val">${(hfTotal * 0.0980665).toFixed(4)} bar</span></div>
        `;
        box.classList.add('show');
    });
}

function handleTechnicalDataClick() {
    if (!currentPipeType || !pipeSpecs[currentPipeType].technicalData) return;
    const data = pipeSpecs[currentPipeType].technicalData;
    const modal = document.createElement('div');
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.7);display:flex;justify-content:center;align-items:center;z-index:1000;animation:fadeIn 0.3s ease-out;';
    const mc = document.createElement('div');
    mc.style.cssText = 'background-color:white;border-radius:16px;padding:30px;max-width:500px;width:90%;box-shadow:0 10px 30px rgba(0,0,0,0.3);animation:slideUp 0.4s ease-out;';
    mc.innerHTML = `
        <h3 style="color:var(--primary);margin-bottom:20px;text-align:center;font-size:1.5rem;">${pipeSpecs[currentPipeType].name} - Technical Data</h3>
        <a href="${data.catalog}" target="_blank" style="display:block;background:linear-gradient(to right,var(--primary),var(--secondary));color:white;text-decoration:none;padding:15px 20px;border-radius:8px;margin-bottom:15px;text-align:center;font-weight:500;">View Catalog</a>
        <a href="${data.technicalSheet}" target="_blank" style="display:block;background-color:var(--light);color:var(--dark);text-decoration:none;padding:15px 20px;border-radius:8px;border:1px solid var(--border);text-align:center;font-weight:500;">Technical Data Sheet</a>
        <button onclick="this.closest('[style]').parentElement.remove()" style="display:block;width:100%;background-color:var(--gray);color:white;border:none;padding:12px 20px;border-radius:8px;margin-top:20px;font-weight:500;cursor:pointer;font-family:Montserrat,sans-serif;">Close</button>
    `;
    modal.appendChild(mc);
    document.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

function handleFittingsClick() {
    try {
        const w = window.open('https://ahmed-mehesin.github.io/Fitting/', '_blank');
        if (!w || w.closed || typeof w.closed === 'undefined') showErrorMessage('Popup blocked! Please allow popups for this site.');
    } catch (e) { showErrorMessage('Unable to open fittings page.'); }
}

document.addEventListener('DOMContentLoaded', () => {
    imageBox.style.display = 'none';
    pricingSection.classList.add('hidden');
    technicalDataContainer.classList.add('hidden');
});
