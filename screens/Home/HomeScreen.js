import React from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
// import firebase from 'firebase';

// Mock Data
const posts = [
  {
    id: 1,
    title: 'Mock Post 1',
    description: 'This is the description for Mock Post 1',
    image: 'https://nationaltoday.com/wp-content/uploads/2021/04/Fitness-Day-.jpg',
    username: 'User1',
  },
  {
    id: 2,
    title: 'Mock Post 2',
    description: 'This is the description for Mock Post 2',
    image: 'https://static.standard.co.uk/2022/09/20/10/Fitness.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart0',
    username: 'User2',
  },
  {
    id: 3,
    title: 'Total War Pre',
    description: 'This is the description for Mock Post 3',
    image: 'https://m.media-amazon.com/images/I/71LSf5KpFiL.jpg',
    username: 'User3',
  },
  {
    id: 4,
    title: 'Mock Post 4',
    description: 'This is the description for Mock Post 4',
    image: 'https://bloximages.newyork1.vip.townnews.com/gonzagabulletin.com/content/tncms/assets/v3/editorial/2/06/206e404c-cddc-11ed-ad96-43656abaf4e1/6423a78bd1453.image.jpg?crop=1763%2C926%2C0%2C124&resize=1200%2C630&order=crop%2Cresize',
    username: 'User4',
  },
  {
    id: 5,
    title: 'Mock Post 5',
    description: 'This is the description for Mock Post 5',
    image: 'https://cdn.shopify.com/s/files/1/0745/0975/articles/gigachad_1024x1024.jpg?v=1667928905',
    username: 'User5',
  },
];

  export default function HomeScreen() {

    //   useEffect(() => {
//     const postsRef = firebase.database().ref('posts');
//     const onLoadingListener = postsRef.on('value', (snapshot) => {
//       setPosts([]);
//       snapshot.forEach(function (childSnapshot) {
//         setPosts((posts) => [...posts, childSnapshot.val()]);
//       });
//     });
    
//     return () => {
//       postsRef.off('value', onLoadingListener);
//     };
//   }, []);


return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.username}</Card.Title>
            <Card.Divider/>
            <Image
              style={{ width: '100%', height: 200 }}
              resizeMode="cover"
              source={{ uri: item.image }}
            />
            <Text style={{ marginBottom: 10, marginTop: 20 }}>{item.description}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Button type="clear" icon={<Icon name="thumbs-up" type="font-awesome" />} />
              <Button type="clear" icon={<Icon name="comment" type="font-awesome" />} />
              <Button type="clear" icon={<Icon name="bookmark" type="font-awesome" />} />
            </View>
          </Card>
        )}
      />
    </View>
  );
  }
