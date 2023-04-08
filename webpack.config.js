const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//node.js에서 파일을 쉽게 핸들링할수 있게 도와주는 일종의 부품

module.exports = {
    mode: "development",
    entry: {
        index: "./source/index.js",
        about: "./source/about.js"
    },
    output: {
        path: path.resolve(__dirname, "public"),
        //__dirname은 webpack.config.js파일이 위치하고 있는 경로를 알려주는 node.js의 약속된 변수 그리고 그 경로에 dist라고 하는 하위 경로의 최종적인 결과물의 폴더 경로
        //filename: index_bundle.js
        filename: "[name]_bundle.js"
        //최종결과물의 파일이름
    },
    //npx wabpack --entry ./source/index.js --output-path ./public/ output-filename index_bundle.js와 같음
    module: {
        rules: [
            {
                //정규표현식 - 객체의 이름 test 웹팩을 통해서 가공하는 여러가지 데이터들에서 확장자가 css인 파일을 처리하는 방법을 웹팩한테 알려주고 싶을때 
                test: /\.css$/i,
                use: [
                    //웹팩으로 가져온 css코드를 웹페이지 안에 style태그로 주입해주는 로더
                    'style-loader',
                    //확장자가 css인 파일을 만나면 웹팩이 알아서 그 css인 파일을 웹팩안으로 로드시켜주는 특수한 명령 css파일을 읽어와서 웹팩으로 가져와주는 로더
                    'css-loader',
                ],
            }
        ]
        //[]배열 :그안에 객체{}들을 만들어 여러가지 처리방법을 작성할수 있다 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './source/index.html',
            filename: './index.html',
            //chunks:[entryname]
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './source/about.html',
            filename: './about.html',
            chunks: ['about']
        })
    ],
}