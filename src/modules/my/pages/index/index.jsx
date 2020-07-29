import React from "react";
import { View, Image, Text } from "@tarojs/components";
import avator from "@/static/images/empty.png";
import aboutIcon from "@/static/images/about-icon.png";
import feedbackIcon from "@/static/images/feedback-icon.png";
import enter from "@/static/images/campus-enter-icon.png";
import ticketIcon from "@/static/images/ticket-icon.png";
import campusIcon from "@/static/images/campus-icon.png";
import prizeIcon from "@/static/images/prize-icon.png";
import styles from "./index.module.scss";

const myIndex = () => {
  return (
    <View>
      <View className={styles.top}>
        <View className={styles.top_top}>
          <View>
            <Image className={styles.avator} src={avator} />
          </View>
          <View className={styles.top_left}>
            <View className={styles.name}>邮小岩</View>
            <View className={styles.info}>学号:2018211214</View>
            <View className={styles.info}>专业：数字媒体专业</View>
          </View>
        </View>
        <View className={styles.top_bottom}>
          <View>
            <Image className={styles.pic} src={prizeIcon} />
            <Text className={styles.text}>我的奖品</Text>
          </View>
          <View>
            <Image className={styles.pic} src={campusIcon} />
            <Text className={styles.text}>我的活动</Text>
          </View>
          <View>
            <Image className={styles.pic} src={ticketIcon} />
            <Text className={styles.text}>我的影票</Text>
          </View>
        </View>
      </View>

      <View className={styles.list}>
        <View className={styles.feedback}>
          <Image src={feedbackIcon} className={styles.icon} />
          <Text className={styles.text}>意见反馈</Text>
          <Image src={enter} className={styles.enter} />
        </View>
        <View className={styles.about}>
          <Image src={aboutIcon} className={styles.icon} />
          <Text className={styles.text}>关于我们</Text>
          <Image src={enter} className={styles.enter} />
        </View>
      </View>
    </View>
  );
};

export default myIndex;
