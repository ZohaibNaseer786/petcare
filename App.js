import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator
} from 'react-native'

import styles from './styling/App'

const App = () => {
  const [data, setData] = useState([])
  const [filtterData, setFiltterData] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  let getDateAndTime = (date) => {
    var d = new Date(date);
    var datetime = d.getDate() + "-"
      + (d.getMonth() + 1) + "-"
      + d.getFullYear()
    return datetime
  }

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = filtterData.filter(
        (item) => {
          const itemData = item.owner.firstName
            ? item.owner.firstName.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
      setFiltterData(newData);
      setSearch(text);
    } else {
      setFiltterData(data);
      setSearch(text);
    }
  };

  const getData = () => {
    setLoading(true);
    const url = `https://dummyapi.io/data/api/post?limit=10`;
    let options = Object.assign(
      { method: 'GET' },
    );
    options.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'app-id': '608921993d1e1cd81938a104',
    };
    fetch(url, options)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.data.length > 0) {
          setData(responseJson.data)
          setFiltterData(responseJson.data)
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const loader = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="black" />
      </View>
    )
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Image
            style={styles.userImage}
            source={{ uri: item.owner.picture }}
          />
          <View style={styles.info}>
            <Text style={styles.userName}>{item.owner.firstName}{item.owner.lastName}</Text>
            {/* <Text style={styles.userEmail}>{item.owner.email}</Text> */}
          </View>
        </View>
        <View style={styles.viewStyle} />
        <Image
          resizeMode={'cover'}
          style={{ height: 250, width: '100%' }}
          source={{ uri: item.image }} />

        <View style={{ marginVertical: '2%', justifyContent: 'center' }}>
          <FlatList
            keyExtractor={(index) => Math.random().toString()}
            horizontal
            data={item.tags}
            renderItem={(item2) => {
              return (
                <View style={styles.tagContainer}>
                  <Text style={styles.tagText}>{item2.item}</Text>
                </View>
              )
            }} />
        </View>

        <Text numberOfLines={3} style={{ fontSize: 18 }}>{item.text}</Text>
        <Text style={styles.linkText}>{item.link}</Text>

        <View style={styles.viewStyle} />
        <View style={styles.likeContainer}>
          <Text style={styles.likeText}>💙 {item.likes} likes</Text>
          <Text style={styles.timeText}>{getDateAndTime(item.publishDate)}</Text>
        </View>
        {/* <View style={styles.viewStyle} />
        <Text style={styles.textStyle}>Get Post Comments</Text>
        <Text style={styles.textStyle}>Get Owner Profile</Text> */}
      </View>
    )
  }

  return loading ? (loader()) : (
    <SafeAreaView style={styles.mainContainer}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
      />
      <FlatList
        keyExtractor={(index) => Math.random().toString()}
        data={filtterData}
        renderItem={renderItem}
      />
    </SafeAreaView>
  )
}

export default App
