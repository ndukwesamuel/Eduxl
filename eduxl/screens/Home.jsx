// import { View, Text } from 'react-native'
// import React from 'react'

// export default function Home() {
//   return (
//     <View>
//       <Text>Home</Text>

//       import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   SafeAreaView,
//   StatusBar
// } from 'react-native';

// export default function Home() {
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
//       <StatusBar barStyle="dark-content" />

//       {/* Header */}
//       <View style={{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 20,
//         paddingTop: 10,
//         paddingBottom: 20
//       }}>
//         <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#000' }}>
//           Welcome, samh
//         </Text>
//         <View style={{
//           backgroundColor: '#E3F2FD',
//           paddingHorizontal: 16,
//           paddingVertical: 6,
//           borderRadius: 20
//         }}>
//           <Text style={{ color: '#2196F3', fontSize: 13, fontWeight: '500' }}>
//             Not Activated
//           </Text>
//         </View>
//       </View>

//       <ScrollView style={{ flex: 1 }}>
//         {/* Activation Banner */}
//         <View style={{
//           backgroundColor: '#FFE8D6',
//           marginHorizontal: 20,
//           padding: 16,
//           borderRadius: 12,
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: 20
//         }}>
//           <Text style={{ flex: 1, color: '#000', fontSize: 14, marginRight: 12 }}>
//             Activate CrushIt app to unlock and enjoy full access to all questions and lot more.
//           </Text>
//           <TouchableOpacity style={{
//             backgroundColor: '#fff',
//             paddingHorizontal: 20,
//             paddingVertical: 10,
//             borderRadius: 20,
//             borderWidth: 2,
//             borderColor: '#FF9800'
//           }}>
//             <Text style={{ color: '#FF9800', fontWeight: '600', fontSize: 14 }}>
//               Activate
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* JAMB Card */}
//         <TouchableOpacity style={{
//           backgroundColor: '#fff',
//           marginHorizontal: 20,
//           padding: 16,
//           borderRadius: 12,
//           flexDirection: 'row',
//           alignItems: 'center',
//           marginBottom: 12,
//           shadowColor: '#000',
//           shadowOffset: { width: 0, height: 2 },
//           shadowOpacity: 0.1,
//           shadowRadius: 4,
//           elevation: 3
//         }}>
//           <View style={{
//             width: 60,
//             height: 60,
//             borderRadius: 30,
//             backgroundColor: '#4CAF50',
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginRight: 16
//           }}>
//             <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>J</Text>
//           </View>
//           <View style={{ flex: 1 }}>
//             <Text style={{ fontSize: 18, fontWeight: '600', color: '#000', marginBottom: 4 }}>
//               Jamb
//             </Text>
//             <Text style={{ fontSize: 14, color: '#666' }}>
//               JAMB Past Exams Questions
//             </Text>
//           </View>
//         </TouchableOpacity>

//         {/* UTME Literature Card */}
//         <TouchableOpacity style={{
//           backgroundColor: '#fff',
//           marginHorizontal: 20,
//           padding: 16,
//           borderRadius: 12,
//           flexDirection: 'row',
//           alignItems: 'center',
//           marginBottom: 24,
//           shadowColor: '#000',
//           shadowOffset: { width: 0, height: 2 },
//           shadowOpacity: 0.1,
//           shadowRadius: 4,
//           elevation: 3
//         }}>
//           <View style={{
//             width: 60,
//             height: 60,
//             borderRadius: 30,
//             backgroundColor: '#4CAF50',
//             justifyContent: 'center',
//             alignItems: 'center',
//             marginRight: 16
//           }}>
//             <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>U</Text>
//           </View>
//           <View style={{ flex: 1 }}>
//             <Text style={{ fontSize: 18, fontWeight: '600', color: '#000', marginBottom: 4 }}>
//               UTME Literature
//             </Text>
//             <Text style={{ fontSize: 14, color: '#666' }}>
//               UTME Literature Books
//             </Text>
//           </View>
//         </TouchableOpacity>

//         {/* Favorite Subjects */}
//         <View style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           paddingHorizontal: 20,
//           marginBottom: 16
//         }}>
//           <Text style={{ fontSize: 20, fontWeight: '600', color: '#000' }}>
//             Favorite Subjects
//           </Text>
//           <TouchableOpacity style={{
//             backgroundColor: '#E8F5E9',
//             paddingHorizontal: 16,
//             paddingVertical: 6,
//             borderRadius: 20
//           }}>
//             <Text style={{ color: '#4CAF50', fontSize: 13, fontWeight: '500' }}>
//               See More
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* Subject Grid */}
//         <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
//           <View style={{ flexDirection: 'row', marginBottom: 16 }}>
//             <TouchableOpacity style={{
//               flex: 1,
//               alignItems: 'center',
//               marginRight: 12
//             }}>
//               <View style={{
//                 width: 90,
//                 height: 90,
//                 backgroundColor: '#E8E0D8',
//                 borderRadius: 16,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginBottom: 8
//               }}>
//                 <Text style={{ fontSize: 32 }}>📖</Text>
//               </View>
//               <Text style={{ fontSize: 14, fontWeight: '500', color: '#000' }}>CRS</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={{
//               flex: 1,
//               alignItems: 'center',
//               marginRight: 12
//             }}>
//               <View style={{
//                 width: 90,
//                 height: 90,
//                 backgroundColor: '#E8D5F0',
//                 borderRadius: 16,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginBottom: 8
//               }}>
//                 <Text style={{ fontSize: 32 }}>📚</Text>
//               </View>
//               <Text style={{ fontSize: 14, fontWeight: '500', color: '#000', textAlign: 'center' }}>
//                 Financial{'\n'}Accounting
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={{
//               flex: 1,
//               alignItems: 'center',
//               marginRight: 12
//             }}>
//               <View style={{
//                 width: 90,
//                 height: 90,
//                 backgroundColor: '#D1E8F5',
//                 borderRadius: 16,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginBottom: 8
//               }}>
//                 <Text style={{ fontSize: 32 }}>📘</Text>
//               </View>
//               <Text style={{ fontSize: 14, fontWeight: '500', color: '#000' }}>Maths</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
//               <View style={{
//                 width: 90,
//                 height: 90,
//                 backgroundColor: '#FFD8D8',
//                 borderRadius: 16,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginBottom: 8
//               }}>
//                 <Text style={{ fontSize: 32 }}>📕</Text>
//               </View>
//               <Text style={{ fontSize: 14, fontWeight: '500', color: '#000' }}>English</Text>
//             </TouchableOpacity>
//           </View>

//           <View style={{ flexDirection: 'row' }}>
//             <TouchableOpacity style={{
//               flex: 1,
//               alignItems: 'center',
//               marginRight: 12
//             }}>
//               <View style={{
//                 width: 90,
//                 height: 90,
//                 backgroundColor: '#D1F2F8',
//                 borderRadius: 16,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginBottom: 8
//               }}>
//                 <Text style={{ fontSize: 32 }}>📗</Text>
//               </View>
//               <Text style={{ fontSize: 14, fontWeight: '500', color: '#000', textAlign: 'center' }}>
//                 JAMB{'\n'}Subjects
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={{
//               flex: 1,
//               alignItems: 'center',
//               marginRight: 12
//             }}>
//               <View style={{
//                 width: 90,
//                 height: 90,
//                 backgroundColor: '#FFE8D0',
//                 borderRadius: 16,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginBottom: 8
//               }}>
//                 <Text style={{ fontSize: 32 }}>📙</Text>
//               </View>
//               <Text style={{ fontSize: 14, fontWeight: '500', color: '#000', textAlign: 'center' }}>
//                 Jamb{'\n'}Syllabus
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={{
//               flex: 1,
//               alignItems: 'center',
//               marginRight: 12
//             }}>
//               <View style={{
//                 width: 90,
//                 height: 90,
//                 backgroundColor: '#D5E0F8',
//                 borderRadius: 16,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginBottom: 8
//               }}>
//                 <Text style={{ fontSize: 32 }}>📖</Text>
//               </View>
//               <Text style={{ fontSize: 14, fontWeight: '500', color: '#000', textAlign: 'center' }}>
//                 Jamb Novels
//               </Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
//               <View style={{
//                 width: 90,
//                 height: 90,
//                 backgroundColor: '#D8F5D8',
//                 borderRadius: 16,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginBottom: 8
//               }}>
//                 <Text style={{ fontSize: 32 }}>💬</Text>
//               </View>
//               <Text style={{ fontSize: 14, fontWeight: '500', color: '#000', textAlign: 'center' }}>
//                 WhatsApp{'\n'}Channel
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <View style={{
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         paddingVertical: 12,
//         borderTopWidth: 1,
//         borderTopColor: '#E0E0E0',
//         backgroundColor: '#fff'
//       }}>
//         <TouchableOpacity style={{ alignItems: 'center' }}>
//           <Text style={{ fontSize: 24, color: '#4CAF50' }}>🏠</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={{ alignItems: 'center' }}>
//           <Text style={{ fontSize: 24, color: '#999' }}>📰</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={{ alignItems: 'center' }}>
//           <Text style={{ fontSize: 24, color: '#999' }}>🔔</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={{ alignItems: 'center' }}>
//           <Text style={{ fontSize: 24, color: '#999' }}>⊞</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={{ alignItems: 'center' }}>
//           <Text style={{ fontSize: 24, color: '#999' }}>☰</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }
//     </View>
//   )
// }

import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default function Home({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}\
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingTop: 10,
          paddingBottom: 20,
        }}
      >
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "#000" }}>
          Welcome, samh
        </Text>
        <View
          style={{
            backgroundColor: "#E3F2FD",
            paddingHorizontal: 16,
            paddingVertical: 6,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "#2196F3", fontSize: 13, fontWeight: "500" }}>
            Not Activated
          </Text>
        </View>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* Activation Banner */}
        <View
          style={{
            backgroundColor: "#FFE8D6",
            marginHorizontal: 20,
            padding: 16,
            borderRadius: 12,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text
            style={{ flex: 1, color: "#000", fontSize: 14, marginRight: 12 }}
          >
            Activate CrushIt app to unlock and enjoy full access to all
            questions and lot more.
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "#FF9800",
            }}
          >
            <Text style={{ color: "#FF9800", fontWeight: "600", fontSize: 14 }}>
              Activate
            </Text>
          </TouchableOpacity>
        </View>

        {/* JAMB Card */}
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            marginHorizontal: 20,
            padding: 16,
            borderRadius: 12,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}
          onPress={() => {
            navigation.navigate("SubjectDisplay");
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: "#4CAF50",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 16,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
              J
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "#000",
                marginBottom: 4,
              }}
            >
              Jamb
            </Text>
            <Text style={{ fontSize: 14, color: "#666" }}>
              JAMB Past Exams Questions
            </Text>
          </View>
        </TouchableOpacity>

        {/* UTME Literature Card */}
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            marginHorizontal: 20,
            padding: 16,
            borderRadius: 12,
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 24,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: "#4CAF50",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 16,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
              U
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "#000",
                marginBottom: 4,
              }}
            >
              UTME Literature
            </Text>
            <Text style={{ fontSize: 14, color: "#666" }}>
              UTME Literature Books
            </Text>
          </View>
        </TouchableOpacity>

        {/* Favorite Subjects */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "600", color: "#000" }}>
            Favorite Subjects
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#E8F5E9",
              paddingHorizontal: 16,
              paddingVertical: 6,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "#4CAF50", fontSize: 13, fontWeight: "500" }}>
              See More
            </Text>
          </TouchableOpacity>
        </View>

        {/* Subject Grid */}
        <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
          <View style={{ flexDirection: "row", marginBottom: 16 }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                marginRight: 12,
              }}
            >
              <View
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: "#E8E0D8",
                  borderRadius: 16,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Text style={{ fontSize: 32 }}>📖</Text>
              </View>
              <Text style={{ fontSize: 14, fontWeight: "500", color: "#000" }}>
                CRS
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                marginRight: 12,
              }}
            >
              <View
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: "#E8D5F0",
                  borderRadius: 16,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Text style={{ fontSize: 32 }}>📚</Text>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Financial{"\n"}Accounting
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                marginRight: 12,
              }}
            >
              <View
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: "#D1E8F5",
                  borderRadius: 16,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Text style={{ fontSize: 32 }}>📘</Text>
              </View>
              <Text style={{ fontSize: 14, fontWeight: "500", color: "#000" }}>
                Maths
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
              <View
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: "#FFD8D8",
                  borderRadius: 16,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Text style={{ fontSize: 32 }}>📕</Text>
              </View>
              <Text style={{ fontSize: 14, fontWeight: "500", color: "#000" }}>
                English
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                marginRight: 12,
              }}
            >
              <View
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: "#D1F2F8",
                  borderRadius: 16,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Text style={{ fontSize: 32 }}>📗</Text>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                JAMB{"\n"}Subjects
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                marginRight: 12,
              }}
            >
              <View
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: "#FFE8D0",
                  borderRadius: 16,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Text style={{ fontSize: 32 }}>📙</Text>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Jamb{"\n"}Syllabus
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                marginRight: 12,
              }}
            >
              <View
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: "#D5E0F8",
                  borderRadius: 16,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Text style={{ fontSize: 32 }}>📖</Text>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Jamb Novels
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, alignItems: "center" }}>
              <View
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: "#D8F5D8",
                  borderRadius: 16,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Text style={{ fontSize: 32 }}>💬</Text>
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                WhatsApp{"\n"}Channel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingVertical: 12,
          borderTopWidth: 1,
          borderTopColor: "#E0E0E0",
          backgroundColor: "#fff",
        }}
      >
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 24, color: "#4CAF50" }}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 24, color: "#999" }}>📰</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 24, color: "#999" }}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 24, color: "#999" }}>⊞</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 24, color: "#999" }}>☰</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
}
