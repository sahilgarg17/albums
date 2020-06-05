import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View style= {styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle}
                    source={{uri: props.propName.thumbnail_image}} 
                    />
                </View>
                <View style={styles.headerContentStyle}>
                  <Text style= {styles.headerTextStyle}>{props.propName.title}</Text>
                  <Text>{props.propName.artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={styles.imageStyle} source={{uri: props.propName.image}} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(props.propName.url)}>
                    BUY NOW!
                </Button>
            </CardSection>

        </Card>
    );
};

const styles= {
    headerContentStyle: {
            flexDirection: 'column',
            justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 20,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    },
}
export default AlbumDetail;