import 'dart:convert' as Convert;

final data = '''{
    "hi": {
        "posEntry": [
            {
                "pos": [
                    12
                ],
                "knowledgePoint": [
                    {
                        "displayExample": [
                            {
                                "originalText": "Hi, there!",
                                "mobileFriendlyHtml": "",
                                "translation": "喂，那位！",
                                "audioS3": "s3://prod-lq-cdn/atlas/cambridge/example_tts/4e914e55e1a3738fec35e7b14b884ec3.wav",
                                "audioCdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/example_tts/4e914e55e1a3738fec35e7b14b884ec3.wav"
                            },
                            {
                                "originalText": "Hi, how are you doing?",
                                "mobileFriendlyHtml": "",
                                "translation": "嗨，你好吗？",
                                "audioS3": "s3://prod-lq-cdn/atlas/cambridge/example_tts/8132c093c8f6c349dd73a549ecb25a95.wav",
                                "audioCdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/example_tts/8132c093c8f6c349dd73a549ecb25a95.wav"
                            }
                        ],
                        "cambridgeVocab": {
                            "definition": "used as an informal greeting, usually to people who you know",
                            "definitionCn": "（通常用作熟人间的问候语）嗨，喂",
                            "pronunciationInfo": {
                                "uk": [
                                    "/haɪ/"
                                ],
                                "us": [
                                    "/haɪ/"
                                ],
                                "ukMp3Cdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/vocab_mp3/uk_pron_u_ukh_ukhho_ukhhok_002.mp3",
                                "usMp3Cdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/vocab_mp3/us_pron_h_hi__hi____hi.mp3"
                            }
                        }
                    }
                ]
            }
        ]
    },
    "you": {
        "posEntry": [
            {
                "pos": [],
                "knowledgePoint": []
            },
            {
                "pos": [
                    6
                ],
                "knowledgePoint": [
                    {
                        "displayExample": [
                            {
                                "originalText": "You look nice.",
                                "mobileFriendlyHtml": "",
                                "translation": "你看起来不错。",
                                "audioS3": "s3://prod-lq-cdn/atlas/cambridge/example_tts/1515148cf77daaa01da7c0adc043e57a.wav",
                                "audioCdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/example_tts/1515148cf77daaa01da7c0adc043e57a.wav"
                            },
                            {
                                "originalText": "I love you.",
                                "mobileFriendlyHtml": "",
                                "translation": "我爱你。",
                                "audioS3": "s3://prod-lq-cdn/atlas/cambridge/example_tts/6a0f33ca3571445390a24f3afe8ce0fc.wav",
                                "audioCdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/example_tts/6a0f33ca3571445390a24f3afe8ce0fc.wav"
                            },
                            {
                                "originalText": "You said I could go with you.",
                                "mobileFriendlyHtml": "",
                                "translation": "你说过我可以和你一起去。",
                                "audioS3": "s3://prod-lq-cdn/atlas/cambridge/example_tts/483dae96f02be32b52d79448979091ce.wav",
                                "audioCdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/example_tts/483dae96f02be32b52d79448979091ce.wav"
                            },
                            {
                                "originalText": "You're coming tonight, aren't you?",
                                "mobileFriendlyHtml": "",
                                "translation": "你今晚会过来，对吗?",
                                "audioS3": "s3://prod-lq-cdn/atlas/cambridge/example_tts/1db5efd4fa6e57636912844a7a5526fd.wav",
                                "audioCdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/example_tts/1db5efd4fa6e57636912844a7a5526fd.wav"
                            },
                            {
                                "originalText": "Are you two ready?",
                                "mobileFriendlyHtml": "",
                                "translation": "你俩准备好了吗？",
                                "audioS3": "s3://prod-lq-cdn/atlas/cambridge/example_tts/8ea7fa0daf51857dec447b4471c3ac02.wav",
                                "audioCdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/example_tts/8ea7fa0daf51857dec447b4471c3ac02.wav"
                            },
                            {
                                "originalText": "You painted that yourself? That's great!",
                                "mobileFriendlyHtml": "",
                                "translation": "那个是你自己画的？你真是个聪明的姑娘！",
                                "audioS3": "s3://prod-lq-cdn/atlas/cambridge/example_tts/5134a5189f492dbdd4eef552a1540228.wav",
                                "audioCdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/example_tts/5134a5189f492dbdd4eef552a1540228.wav"
                            }
                        ],
                        "cambridgeVocab": {
                            "definition": "used to refer to the person or people being spoken or written to",
                            "definitionCn": "你；您；你们",
                            "pronunciationInfo": {
                                "uk": [
                                    "/juː/",
                                    "/jə/",
                                    "/jʊ/"
                                ],
                                "us": [
                                    "/juː/",
                                    "/jə/",
                                    "/jʊ/"
                                ],
                                "ukMp3Cdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/vocab_mp3/uk_pron_u_uke_ukevi_ukevil_013.mp3",
                                "usMp3Cdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/vocab_mp3/us_pron_u_u___u_____u.mp3"
                            }
                        }
                    },
                    {
                        "displayExample": [
                            {
                                "originalText": "You learn to accept these things as you get older.",
                                "mobileFriendlyHtml": "",
                                "translation": "年纪大些之后你开始学会接受这些事情。",
                                "audioS3": "s3://prod-lq-cdn/atlas/cambridge/example_tts/483ed2d3a3a7e82dc8dfa2c616d94199.wav",
                                "audioCdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/example_tts/483ed2d3a3a7e82dc8dfa2c616d94199.wav"
                            },
                            {
                                "originalText": "You can't get a driving licence till you're 17 in this country.",
                                "mobileFriendlyHtml": "",
                                "translation": "在这个国家，17岁以下者不能获得驾驶执照。",
                                "audioS3": "s3://prod-lq-cdn/atlas/cambridge/example_tts/ceddf4dcd6e4dd9fb4977666f14c0c66.wav",
                                "audioCdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/example_tts/ceddf4dcd6e4dd9fb4977666f14c0c66.wav"
                            },
                            {
                                "originalText": "Too much alcohol is bad for you.",
                                "mobileFriendlyHtml": "",
                                "translation": "饮酒过量对身体有害。",
                                "audioS3": "s3://prod-lq-cdn/atlas/cambridge/example_tts/cb2789fafd224769bda8f69694936f69.wav",
                                "audioCdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/example_tts/cb2789fafd224769bda8f69694936f69.wav"
                            },
                            {
                                "originalText": "How do you get this thing to start?",
                                "mobileFriendlyHtml": "",
                                "translation": "怎样才能让这东西启动？",
                                "audioS3": "s3://prod-lq-cdn/atlas/cambridge/example_tts/9e7446ce05a191961b4fea1dab9e0106.wav",
                                "audioCdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/example_tts/9e7446ce05a191961b4fea1dab9e0106.wav"
                            }
                        ],
                        "cambridgeVocab": {
                            "definition": "people in general",
                            "definitionCn": "（泛指）你，任何人",
                            "pronunciationInfo": {
                                "uk": [
                                    "/juː/",
                                    "/jə/",
                                    "/jʊ/"
                                ],
                                "us": [
                                    "/juː/",
                                    "/jə/",
                                    "/jʊ/"
                                ],
                                "ukMp3Cdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/vocab_mp3/uk_pron_u_uke_ukevi_ukevil_013.mp3",
                                "usMp3Cdn": "http://lqcdn-b.llscdn.com/atlas/cambridge/vocab_mp3/us_pron_u_u___u_____u.mp3"
                            }
                        }
                    }
                ]
            }
        ]
    }
}''';

class Entity {
  String key;
  int value;

  Entity(this.key, this.value);
}

void main() {
  var a = [];
  a.add({'a': 123, 'b': false});

  print(a[0].runtimeType);
}
