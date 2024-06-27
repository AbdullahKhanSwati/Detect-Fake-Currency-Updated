import React from 'react';
import { View, Text, StatusBar, Image , ImageBackground , StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import { Header, CustomButton } from '../../components';
import Swiper from 'react-native-swiper';
import RouteName from '../../routes/RouteName';

const HomeScreen = () => {
    const images = [
        "https://source.unsplash.com/1024x768/?currency",
        "https://source.unsplash.com/1024x768/?dollar",
        "https://source.unsplash.com/1024x768/?exchange",
        "https://source.unsplash.com/1024x768/?money"
    ]

    return (
        



        <ImageBackground
        source={{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAywMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBAUGBwj/xABAEAABAwIEBAMEBggFBQAAAAABAAIDBBEFBhIhEzFBUWGBkQcicaEjMkJSscEUJDNyksLR4RZTg7LwFUNUc4L/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAhEQEAAgIDAAMAAwAAAAAAAAAAAQIDERITISIxUQRBcf/aAAwDAQACEQMRAD8A8mCYJAmCBwmCQJggsBKKQJggYJglRCB0yVqsDVG06BG6bQgWps0FypdAoXUoG6GyiiAFKmSkIBdKSUSkKCFKUSlQA/BISmKUoAUqJQQQJgkCYIGTApAmQOEwSApgUDJ27qu6sjUSmFzAshjLq3CsPqcSqW09HHxJTyFwPmV1tF7PsxSbmiY396VqxteInTWK+bchwjbkkc2y7XEsnYjhjqZlc2GL9JfoYeJcA9zbpuF1eC5Ay7XU74qqKofVQkB8jZ3N1X66RsOqpbNWv2mafHcPGXhJZewYp7I6OQE4Xik0DvuVLBI34XFiPjuuAzJk/GsugyV9Nqpv/JhOqPzPTzV6ZqX8iWc1c/ZGyayYNLiGtaXOJsABck9gFpNtfZEKrIEK1zSHEEEEGxBSEJs0pcEpCtcFW4Kdo0qKUlO4KsqyoJSiUCUClBQlRAAUwSDkiEFgRSBMEDApgUgRBQWBWRlUgpmmyiUw6rKUNTiFY3DqZoBedRlt+zHc/kvoPCzwaaOEyOkLGga3c3eJXmPs2wxtDhhqHt+mmAc49r7geQt6pvaLmF1HFSYXBI5hn+llc02LWg+6PM3/AIV5eXd8vxdsU3j9bH2t14bV0FKT9WF8h8yB/KV55imN1tW9rnTyxaWhv0UhbfxNuZVGPZgqMbqop6t+t0UIhDjzcASbnx3WpdJddUY4tG7MotNY1Et5h2Z8Yw9wNPitYzwfKXt9HXXeYF7SHyAQY3TskjeLGogH+5vX/my8pp4JqudsFNE6WV/1WtFyV22VMqvMnFc5lRIdrXPAjPiR+0PgLDuVllpSI20pu8+w2ebsnYJUwsxbB66noYZDd7LF0Th3YBuDz93r4blZGEZa/wCkUDcQo42tjZpkkllaHyzR3Go7bRjTc2FyepHJdnhODQwSNld9NOG6eK9oGkdQ0cmjwHms3/D2HOFjTnTptww9wjH/AMX038lz9t7RxJmmOXkWb8q1LswTGlbGynLRJJNI4NYwE8yfG/yWgzJl6bApYWSTsqGTRh7ZWNsN+n917M6ma6PD6memFRNCHUjxpBOoHSCL8uR9VzWbsDGIYDhrnScEwaonu4ZeW6L7WHPkVrTPNZiLE1i3+vIXNVTl0ubMBZgs8AgmfNFLEHB7wAblc49dtLRaNwwtXjOlDlU5XPVLlrDOSFKUTzSlSqhS3UcgggRCVG6BwUyrCYFA4RSXRBQOCrIGcaaOG9uI9rPUgfmqVkYebYhRk8hUxE/xhRJD3jBtLKYgCwDzYDyC8w9o1U6XNc4PKONjGjsLX/NejYVL9A8X3Dz+C82z1RzVGbKgwsLg6Njy47NaLW3PkvO/j67JmXfn3wiIc+HrMoqQ1LxxXcKPvbcjwCeHDxCA5/vv+8W7eQ/NbfBwzi2IuSd7rfJl19MqYv1vMvxYbEY6ee8LZ3BrY3Mc0THsXke+fDl8V6ThzGhjQ2wAAAAGwXKUTIqiB0UzQ+N495rtwV1OGP1RMOona1781wZJ3666xqNMKhzHU1uP0tLQlgh4pZNC9l36Rzdfou2kkbBA6SS+lovsLkrAoKenjlfMyFjZX7Oe1u7lJsUp9csFMWzzQ7vGqzGEdHvsQ0+HPwV8Mw48vtvFDYZS+rZKwRvl01TGg30uGx89m+q1lZvTV7G/9udtQ0H7rgL/ADDlXU5jEc94HisrCC1ugaYo79AOZ+JWBQ1Eb6qZruEJJIHMqTE67WuB2ueQNidlTNasz8XRjx21uYcl7SIg7CcLn6hgYfLb815vIF6dnK0+VADuYZD+K8wkN12/xZ+DLPGrKnqhytcqXFdcOWSHmlJUJ3SkqyqFBQoIAmCQFEFA6N0gKa6B0UgKN0DhS5G4NiEt0boPYMExBs1ni1pow8b9UmORMqCyRwLiwWFzsN78u+65bCKx1HhmHz2JbYj0NiPRdBUVjXR6mODgRqFxcFeXaurePSrbdYc/WsOo3VVCTBUjV9rdZUkTtDnuYyPUS7Qzk2/Ra+dxYG3IGg7E/gpHeYZU2ju0XdbYd1vKGuhw2ngppHOkn0AMjYNT5D1IHa/Xl4rzejxaSKMa5OEO4F3H4A/iVRU5hmc18FE0xMk2k0uu+T953Mqk45lbk9ExfNbIg5lTLvbaipZN/wDVlHL91vqVzFXmOqxANgbpjpo9mU8I0RM8v6rkr6ReoeAPu9FkMq3H3YmKJporxiduniruGzS86r/Yby8+pRmq5J2MZPNw4fsQRjmB0sFz8PEe4NJc55Ng1u91l4xFW4LRRT1MJjbM/Qxuve9id+3JVjF7qGk5PNy22ISxuwKspgbHhudG1x942F15w47LMnxSolvZ3DB7c/Va5xXfgxzSPXDmvFp8BxVTii8qtxXRDnkpKChKVWVQlBRBALohJdMCgcI3SIoHRCVQFA97I3SXRug7LBI46rK7Ynus5kjywnvcmyWCpe2l4ZvdnL4JcoVLo8MmIAJjnO2oD7IPM8lKjEKWoxANZI0yv+sWNsy/QAnc/HquG8Tyl3Un4wtgr3CF0chYANw997NHw6rU1GIM4loA556Pfz8h0W0dTlrtQA0rW1+FPa10tK1xbzdG3n5KtdLTPjEMpebyvNz9lvNXNe7T7oEbfHmtYKktJEYaEDI5x95xPxW8YpljOaIbMTQRm9zIUDXSPIZE0MvsANyVrtSyMPf+vU//ALAPmrdURCnZNnc5Nwyoaw1FUPrTAi5ubCxV/tRn1UFC2+/6QXW8NJH5hbLAJtOHObt+0P4Bcn7RpJn1VGSxwpmRus/oXE7j0A9VyY/ll26b/HHpypcqnOSuf2SFy9DThmRc5IUCUCVKqFAlS6CkQoXQJQQBEFJdNdA10QUoKN0DopLo3QNdG6UFS6C+OokZGY2vOhxuW9LpeI7qb/FV3Uuo4x96TFpdLhWNiRogriA77Mh5H4rf0kkZeGOIa48j0K87WbSYlPTDRcPj+478lz5MET7VvTNqNS7+sy1R4mCZWGKb/Ni2Pn0K0VVkLE4hemqKeoHTUTGfTf8AFDC82yUos140/wCXKLjyK6CHOdLKPp2Ojd1LHh4/qsotmp41muO/rlBlDG9Wk08Yt1Mot/ZCtwGqwWSiqamWFzHzhrtF/o+1yusmzZhTW3M7vhwyuezDmmlr6KWkp6eR7ZB+0kOnSe4HO/or0vkvOpjxnamOsb36yf8AFtPh9M6KmiNRJqve+lg2HXr6LnsUx+vxP3aiXTEd+GwWb/UrVKEreuKtfdMrZLW8kxclJQQutGYlBAlC6AkoXKBKF0EupdBC6AIgpLogoHuigCE4IUSmAATAFMNKcFqjadE0lEMPZXN0qxpYnJPFjcMoiJ3dZjTHdXMMXWyrzlaKQ13CPdHgu8VtmGn+1a6uY6iH1rlVnJK0Yon+2j4Lu6HBK6LVh1ttV/JI91F9m/mo7Z/E9MfrQcEocIhbp5peioeYenJT2T+Kzjhq+GUNBWwcY7KpxZ0VuUq8GGWlKWlZRLVW4tVtqzCg3SlXEtSOsmzSu6F0ziEhKsql1LpTyQuggB7I2PZZWgePdQtaOd+V1fhIxt+yO6yNLb2upobzsbb7/DmnCRTuoC5XaG3t15WR4XuB+l2gm2q21+1+6cJNqtbh1RD3d0+hqmhqjrk2USu7I8ZyOgeKmhqdZtBMVOOfFTQ1TQ1OtO5TjlTjnxU0NU0NTrOUpx3dEOM5HQ1TQ1OtG5KZXIcRxT6B4qaB4p1m1Ze7uhdyt0NU0NTgbU3KUgrI4Y7FTQ1OEm2NY9lN+yydDR4KaGqeEjFId2Qseyy+GPFTQ1OEjY5fcTjtCw/VlnZC8d2vOh3ycV1eIshp8LBZTwl9PQh8T3sDi1wGx326nY7KKK0oV0Dm1FblyKohglbVgtm1xNNw1jHNHLaxJ5dysnKeL1WLZZxJtWW/qFMIYdFw0teDe7L6CextdRRVGznhgpKqiqaalpopnZhiotbYGC0LaicADbY2jYLjf3RuuLzk8x47W0UVo6SF7DHCwANaTG0nxPPmd1FEr9paEKKKLVCKKKKBFFFEEUUUQRRRRBFFFEHX5My/Q41hlW6sEgfGZi18brEaY2uHzv6rZOylhLNc3DlPCcRoMpIdpcBv131b2PQWsoookO/KOE/pdMOHJpkqYGObxNrPk0n5D5npYDDw3KuG1EZMnHuC/cSkHZ7wPk0epUUUDNp8p4S3EHU7oXvYyWOxc83I1yXHowD1VU2X8Ljhj00rbyt0kkm7f1XiXHY6rG/gFFEGqzjhNDhzZRSQBhZK1oNyTbXMP5W+i5RRRB//2Q==' }}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <StatusBar backgroundColor={colors.primary} barStyle={'dark-content'} />
          <Header title={'AI- Fake Currency Detection'} />
          <View style={styles.swiperContainer}>
            <Swiper style={styles.swiper} showsPagination={false} showsButtons={false} autoplay={true}>
              {images.map((element, index) => (
                <Image
                  key={index}
                  source={{ uri: element }}
                  style={styles.image}
                />
              ))}
            </Swiper>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7p4WBRPTbtTPSOWNC7ZYF9cILdKTahVk9Kw&usqp=CAU"
              buttonText="Converter"
              route={RouteName.CONVERTER_SCREEN}
            />
            <CustomButton
            style={{color:"white"}}
              imageUrl="https://img.freepik.com/free-photo/coins-paper-money-globe-white-statistic-form-background_1387-296.jpg"
              buttonText="Detector"
              route={RouteName.DETECTION_SCREEN}
              textColor="white"
            />
          </View>
        </View>
      </ImageBackground>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    container: {
      flex: 1,
      // Add other styles as needed
    },
    swiperContainer: {
      height: '40%',
      width:"100%",
     
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Set a background color for the swiper container if needed
      padding: 4,
      marginVertical: 10,
    },
    swiper: {
      height: '100%',
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      color:"white",
      fontSize:"30px",
      justifyContent: 'space-between',
      padding: 4,
    },
  });