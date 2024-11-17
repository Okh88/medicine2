import { Pressable, Text, View, Image, ImageComponent } from "react-native";
  
    type buttontype = {buttontext: string, func:()=> any}
   export function Fbutton({buttontext, func}: buttontype) {
      return(
        <Pressable onPress={func} style={({pressed}) =>[{
          width:250,
          flexBasis:45,
         borderRadius:30,
         justifyContent:"center",
         alignItems:"center",
         backgroundColor: pressed ? 'white' : '#6767EB',
         
         }]}>
          <Text style={{color:"white", fontSize:20}}>{buttontext}</Text>
        </Pressable>
      )
    }
export function Gbutton({buttontext, func}: buttontype) {
      return(
        <Pressable onPress={func} style={({pressed}) =>[{
          width:100,
          height:45,
         borderRadius:30,
         justifyContent:"center",
         alignItems:"center",
         backgroundColor: pressed ? 'white' : '#131318',
         
         }]}>
  
          <Text style={{color:"white", fontSize:20}}>{buttontext}</Text>
        </Pressable>
      )
    }
export function Mbutton({buttontext, func}: buttontype) {
      return(
        <Pressable onPress={func} style={({pressed}) =>[{
          width:380,
          height:45,
         borderRadius:19,
         justifyContent:"center",
         paddingLeft:18,
         paddingRight:22,
         backgroundColor: pressed ? 'white' : '#42BF8E',
         
         
         }]}>
  
          <Text style={{color:"white", fontSize:20}}>{buttontext}</Text>
        </Pressable>
      )
    }
    export function Abutton({buttontext, func}: buttontype) {
      return(
        <Pressable onPress={func} style={({pressed}) =>[{
          width:190,
          height:45,
         borderRadius:30,
         justifyContent:"center",
         alignItems:"center",
         backgroundColor: pressed ? 'white' : '#131318',
         
         }]}>
  
          <Text style={{color:"white", fontSize:20}}>{buttontext}</Text>
        </Pressable>
      )
    }