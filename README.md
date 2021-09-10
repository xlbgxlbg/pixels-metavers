# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


开发计划
8月30日 完成项目前端项目的搭建和完成首页开发
8月31日 完成游戏页面包括图片面板，左侧装扮面板和右侧商家面板
9月01日 完成个人中心页面和商家页面，通过右上角下拉框来切换
9月02日 完成整个游戏前端和合约交互接口的定义的规划以及前几天任务的补全
9月03日 完成头像绘制的算法的结构和大体逻辑
9月04日 完成头像绘制的算法
9月05日 完成头像的绘制和展示，以及构思合约的初步逻辑
9月06日 编写合约
9月07日 编写合约
9月08日 编写合约
9月09日 编写合约
9月10日 部署合约
9月11日 合约和前端的交互
9月12日 复盘或补全之前所有工作，并结束所有开发工作
9月13日 编写白皮书
9月14日 整理PPT或发言稿
9月15日 上传项目或者录制视频

https://baike.baidu.com/item/RGB/342517 RGB （颜色系统）每像素颜色16777216(256 * 256 * 256)种

清晰度
1px  洞察秋毫级
3px  层次分明级
5px  远人无目级
8px  渺若烟云级
10px 云雾迷蒙级

用户可以上传器官或物品图片，然后通过那个算法生成一个很详细的像素画，然后再通过像素画来生成一个画的数据，然后就可以把这个数据发布了。

像素元宇宙
从头开始
扩展四肢
立体环绕
唱跳海聊
动作竞技

每个部件组合又切合了nft碎片化的趋势

合约初始只会有10000个原始居民名额，是为创世像素元宇宙居民。原始居民可以选择自己的职业，可以成为医生或者是商人等等。
创世居民在发行1个月以后可以通过男女配对来生育子女，每个子女生长周期为1个月。成人后也可以通过配对生育子女。合约总人口1024000人

我们不是做nft，我们是做元宇宙，只不过当前的条件，只能慢慢构建宇宙，从头开始。

商品跟着ID走，ID跟着address走，商品本质上就是一个NFT，只不过是一个同质化的NFT

商家侧
1. 用户入驻成为商家，此时在商家列表增加一个商家信息，信息包括商家店铺名称，店铺地址以及商家头像信息。
2. 用户入驻后可以发布商品，在商家店铺list中插入一条商品id，然后在再在商品mapping里面把商品数据和id对应起来，商品默认上架。
3. 去个人中心查看自己发布的商品信息，也就是查询商品列表来获取当前店铺所有商品数据。可通过时间、金额、以及上下架和权重来排序。
4. 点击每个商品，可以看到当前商品出售数据，出售给了哪些用户。然后可以下架或者上架某个商品。

用户侧
1. 用户进入平台后，可以在首页看到自己的用户信息和右侧的热门商品数据，根据销售量来的。
2. 用户可进入商城查看当前平台的商品和商家信息，商品card上有该商品的销售的数据如销售量、销售价格、商家。
3. 进入商家列表页可以看到平台商家有哪些，累计销售额和销售数量信息，点击后进入商家信息展示页。
4. 用户可以点击当前商品上面的购买按钮，然后可以够吗该商品。购买后用户可在自己的商品列表中查看到当前商品，但是需要进行安装或使用才能在首页上面显示
5. 用户可以在首页把自己列表里面的数据点击后在页面上显示出来或者是旁边的商品里面。
6. 用户可以进行收藏，来自己查看或者是首页可以输入商品id来让图片显示出来。

合约表数据结构
商家表：[{
    address: address;
    name: string;
    avatar: id[] //当前装备的元数据
}]
用户数据mapping：address => {
    avatar: id[],
    isShangjia: boolean
}
NFT表：{
    ID: string,
    name: string,
    发行方： address,
    数量:
    元数据： 36位编码，
    用户可以自己上传自己的元数据URI
}
用户表: {
    地址: address,
    NFT: [
        {
            id: string,
            name: string.
            商家
        }
    ]
}