import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Button ,Picker } from "@tarojs/components";
import styles from './index.module.scss'

const list = {
    selector: ['7月13日 10:00-12:00', '7月14日', '7月15日', '7月16日']
    
}


const VolunteerDetail = () => {
    
    const onChange = (e) => {
        const index = e.detail.value
        setSelected(index) //数据的下标
        Taro.showToast({
          title: "申请成功！申请结果将会通过重邮小帮手进行通知！",
          icon: "success",
          duration: 2000,
        });

    }


    const [selected, setSelected] = useState()
    
    return (
      <View className={styles.wrapper}>
        <View className={styles.pic}>一张图片</View>
        <View className={styles.card}>
          <View className={styles.item1}>
            <View className={styles.title}>
              <View className={styles.name}>四月护花使者活动</View>
              <View className={styles.status}>招募中</View>
            </View>
            <View className={styles.timeWrap}>
              <View>报名时间</View>
              <View className={styles.time}>2020.07.05 15:30 开抢</View>
            </View>
            <View className={styles.timeWrap}>
              <View>志愿时间</View>
              <View className={styles.time}>2020.07.05-2020.07.09</View>
            </View>
          </View>

          <View className={styles.item2}>
            <View className={styles.subTitle}>活动介绍</View>
            <View className={styles.text}>
              志愿者需要在选择的志愿时间内，在指定地点进行护花活动，对进行随意摘花的同学、游客进行提醒，并告诫摘花的坏处等。
            </View>
          </View>
          <View className={styles.item2}>
            <View className={styles.subTitle}>活动规则</View>
            <View className={styles.text}>
              志愿者需要在选择的志愿时间内，在指定地点进行护花活动，对进行随意摘花的同学、游客进行提醒，并告诫摘花的坏处等。
            </View>
          </View>
          <View className={styles.item2}>
            <View className={styles.subTitle}>志愿时长</View>
            <View className={styles.text}>2时长</View>
          </View>
        </View>
        <Picker
          mode='selector'
          range={list.selector}
          onChange={onChange}
          header-text='选择时间'
        >
          <Button className={styles.button}>立即报名</Button>
        </Picker>
      </View>
    );
};

export default VolunteerDetail;
