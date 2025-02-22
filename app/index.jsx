import { Text, View, Image } from "react-native";

export default function Index() {
  const alumnos=[
    { 
    "nl": 1,
    "nombre" : 'Juan Lopez',
    "imagen" : 'https://cdn.pixabay.com/photo/2014/06/05/17/42/track-362874_1280.jpg',
    },
    { 
      "nl": 2,
      "nombre" : 'Laura Martinez',
      "imagen" : 'https://cdn.pixabay.com/photo/2014/06/05/17/42/track-362874_1280.jpg',
      },
      { 
        "nl": 3,
        "nombre" : 'Maria Lopez',
        "imagen" : 'https://cdn.pixabay.com/photo/2014/06/05/17/42/track-362874_1280.jpg',
        },
    
  ]
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        }}
    >

     {alumnos.map(a => (
        <View key={a.nl}>
          <Text>Nombre: {a.nl}</Text>
          <Text>Nombre: {a.nombre}</Text>
          <Image 
            style={{width: 100, height: 100, borderRadius:20}}
            source={{uri: a.imagen }} 
          />
         
        </View>
      ))}
    </View>
  );
}
