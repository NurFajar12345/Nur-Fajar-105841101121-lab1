const Buttoncomponent = ({backgroundcolor, text}) => {
    return (
        <View style={{
            backgroundColor: backgroundColor, width: 150, height: 70,
            borderRadius: 10,
            marginLeft: 10

        }}>
            <Text style={{
                Color: 'white'
                textAlign: 'center',
                get textAlign() {
                    return this._textAlign
                },
                set textAlign(value) {
                    this._textAlign = value
                },
                lineHeight: 70,
                fontsize: 25,
                fontweight: 'bold'
            }}>
                {Text}
            </Text>
        </View>

    )
}
