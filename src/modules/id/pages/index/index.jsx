import React from "react";
import { View, Button, OpenData } from "@tarojs/components";
import { resolvePage, navTo } from "@/common/helpers/utils";
import NavBack from "@/common/components/nav-back";
import Empty from "@/common/components/empty";
import { useQuery } from "react-query/dist/react-query.production.min";
import Placeholder from "@/common/components/placeholder";
import emptyImg from "@/static/images/empty.png";
import { getIdCardList } from "../../services";
import styles from "./index.module.scss";

const PAGE_TITLE = "身份有证";

const IdIndex = () => {
  const { data: idCardListRes, isLoading, isError } = useQuery(
    "getIdCardList",
    getIdCardList
  );

  if (isLoading) return <Placeholder title={PAGE_TITLE} />;
  if (isError || !idCardListRes)
    return <Placeholder title={PAGE_TITLE} isError />;

  if (idCardListRes.identity_cards.length === 0) {
    return (
      <Empty
        title={PAGE_TITLE}
        detail="证件空空如也哦～"
        suggestion="快去申请新的会员证吧"
        onBtnClick={() => navTo({ url: resolvePage("id", "apply") })}
        btnContent="申请证件"
      />
    );
  }
  return (
    <View className={styles.wrapper}>
      <NavBack title={PAGE_TITLE} background="#FFFFFF" />
      {idCardListRes.identity_cards?.map((item) => (
        <View
          className={styles.card}
          key={item.name + item.team_name + item.collage + item.create_time}
        >
          <View className={styles.top}>
            <OpenData
              className={styles.avator}
              type="userAvatarUrl"
              defaultAvatar={emptyImg}
            />
            <View className={styles.top_right}>
              <View className={styles.name}>{item.name}</View>
              <View className={styles.info}>{item.team_name}会员</View>
            </View>
          </View>
          <View className={styles.footer}>
            <View className={styles.time}> {item.create_time}</View>
            <View className={styles.department}>学生社团管理部</View>
          </View>
        </View>
      ))}
      <Button
        className={styles.btn}
        onClick={() => navTo({ url: resolvePage("id", "apply") })}
      >
        申请新证
      </Button>
    </View>
  );
};

export default IdIndex;
