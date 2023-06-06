import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

const Post = () => {
  const postInfo = [
    {
      postTitle: 'work out',
      postPersonImage: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      postImage:
        'https://nationaltoday.com/wp-content/uploads/2021/04/Fitness-Day-.jpg',
      likes: 765,
      isLiked: false
    },
    {
      postTitle: 'work out',
      postPersonImage: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      postImage:
        'https://static.standard.co.uk/2022/09/20/10/Fitness.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart0',
      likes: 345,
      isLiked: false
    },
    {
      postTitle: 'work out',
      postPersonImage: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      postImage: 'https://m.media-amazon.com/images/I/71LSf5KpFiL.jpg',
      likes: 734,
      isLiked: false
    },
    {
      postTitle: 'ovicore',
      postPersonImage: 'https://img.freepik.com/free-icon/user_318-159711.jpg',
      postImage:
        'https://bloximages.newyork1.vip.townnews.com/gonzagabulletin.com/content/tncms/assets/v3/editorial/2/06/206e404c-cddc-11ed-ad96-43656abaf4e1/6423a78bd1453.image.jpg?crop=1763%2C926%2C0%2C124&resize=1200%2C630&order=crop%2Cresize',
      likes: 875,
      isLiked: false
    }
  ]

  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked)
        return (
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={{ uri: data.postPersonImage }}
                  style={{ width: 40, height: 40, borderRadius: 100 }}
                />
                <View style={{ paddingLeft: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
                    {data.postTitle}
                  </Text>
                </View>
              </View>
              <Feather name='more-vertical' style={{ fontSize: 20 }} />
            </View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Image
                source={{ uri: data.postImage }}
                style={{ width: '100%', height: 400 }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 15
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <AntDesign
                    name={like ? 'heart' : 'hearto'}
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: like ? 'red' : 'black'
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic
                    name='ios-chatbubble-outline'
                    style={{ fontSize: 20, paddingRight: 10 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name='navigation' style={{ fontSize: 20 }} />
                </TouchableOpacity>
              </View>
              <Feather name='bookmark' style={{ fontSize: 20 }} />
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <Text>
                Liked by {like ? 'you and' : ''}{' '}
                {like ? data.likes + 1 : data.likes} others
              </Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 14,
                  paddingVertical: 2
                }}
              >
                Descriptions for posts will go here :)
              </Text>
              <Text style={{ opacity: 0.4, paddingVertical: 2 }}>
                View all comments
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={data.postPersonImage}
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      backgroundColor: 'orange',
                      marginRight: 10
                    }}
                  />
                  <TextInput
                    placeholder='Add a comment '
                    style={{ opacity: 0.5 }}
                  />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Entypo
                    name='emoji-happy'
                    style={{
                      fontSize: 15,
                      color: 'lightgreen',
                      marginRight: 10
                    }}
                  />
                  <Entypo
                    name='emoji-neutral'
                    style={{ fontSize: 15, color: 'pink', marginRight: 10 }}
                  />
                  <Entypo
                    name='emoji-sad'
                    style={{ fontSize: 15, color: 'red' }}
                  />
                </View>
              </View>
            </View>
          </View>
        )
      })}
    </View>
  )
}

export default Post
