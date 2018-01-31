import React from 'react'
import "./blogList.scss"
import demourl from '~/assets/imgs/demo.jpg'
import { Icon } from 'antd'
export default class BlogList extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div className="blog-list">
            <div className="blog-list__item">
                <div className="z-media">
                    <div className="z-media__header">
                        <img class="z-media__icon" src={demourl} />
                    </div>
                    <div className="z-media__body">
                        <a className="z-media__title">2017年 Java 程序员，风光背后的危机</a>
                        <p>不得不承认，经历过行业的飞速发展期，互联网的整体发展趋于平稳。为什么这么说？为什么要放在 Java 程序员的盘点下说？

的确，对于进可攻前端，后可守后端大本营的 Java 程序员而言，虽然供应逐年上涨，但是市场似乎对他们依然青睐有加。这些承担着技术招聘市场中高供给高需求的 Java 程序员在 17 年的招聘市场上，真的还能如此风光吗？还是埋下了一些「危机」的伏笔呢？

100offer 研究后发现，2017 年的 Java 程序员的确很风光，具体体现在市场需求和平均工资的上涨上，但这些风光之后，埋伏了一些危机：

市场需求增长远少于 Java 程序员供应增长，Java 程序员面临更加激烈的竞争；

受供应量的大幅增长影响，Java 程序员平均跳槽薪资涨薪幅度较低；

需求方对 Java 程序员提出更加严苛的选材标准。</p>
                        <div className="z-media__footer">
                            <Icon type="message" />
                        </div>
                    </div>

                </div>
            </div>
            <div class="blog-list__item">
                <div className="z-media">
                    <div className="z-media__header">
                        <img class="z-media__icon" src={demourl} />
                    </div>
                    <div className="z-media__body">
                        <a className="z-media__title">2017年 Java 程序员，风光背后的危机</a>
                        <p>不得不承认，经历过行业的飞速发展期，互联网的整体发展趋于平稳。为什么这么说？为什么要放在 Java 程序员的盘点下说？

的确，对于进可攻前端，后可守后端大本营的 Java 程序员而言，虽然供应逐年上涨，但是市场似乎对他们依然青睐有加。这些承担着技术招聘市场中高供给高需求的 Java 程序员在 17 年的招聘市场上，真的还能如此风光吗？还是埋下了一些「危机」的伏笔呢？

100offer 研究后发现，2017 年的 Java 程序员的确很风光，具体体现在市场需求和平均工资的上涨上，但这些风光之后，埋伏了一些危机：

市场需求增长远少于 Java 程序员供应增长，Java 程序员面临更加激烈的竞争；

受供应量的大幅增长影响，Java 程序员平均跳槽薪资涨薪幅度较低；

需求方对 Java 程序员提出更加严苛的选材标准。</p>
                    </div>
                </div>
            </div>
            <div class="blog-list__item">
                <div className="z-media">
                    <div className="z-media__header">
                        <img class="z-media__icon" src={demourl} />
                    </div>
                    <div className="z-media__body">
                        <a className="z-media__title">2017年 Java 程序员，风光背后的危机</a>
                        <p>不得不承认，经历过行业的飞速发展期，互联网的整体发展趋于平稳。为什么这么说？为什么要放在 Java 程序员的盘点下说？

的确，对于进可攻前端，后可守后端大本营的 Java 程序员而言，虽然供应逐年上涨，但是市场似乎对他们依然青睐有加。这些承担着技术招聘市场中高供给高需求的 Java 程序员在 17 年的招聘市场上，真的还能如此风光吗？还是埋下了一些「危机」的伏笔呢？

100offer 研究后发现，2017 年的 Java 程序员的确很风光，具体体现在市场需求和平均工资的上涨上，但这些风光之后，埋伏了一些危机：

市场需求增长远少于 Java 程序员供应增长，Java 程序员面临更加激烈的竞争；

受供应量的大幅增长影响，Java 程序员平均跳槽薪资涨薪幅度较低；

需求方对 Java 程序员提出更加严苛的选材标准。</p>
                    </div>
                </div>
            </div>
        </div>
    }
}