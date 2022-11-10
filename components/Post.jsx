import { Card, Text, Avatar, Icon } from "@rneui/themed"
import { View, ActivityIndicator, Image } from "react-native"
import styles from "../styles"

export default function Post({ post }) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: post.photoURL }} style={styles.image}
                PlaceholderContent={<ActivityIndicator />}

            />
            <Text>{post.description} {post.description} </Text>


        </View>
    )
}
