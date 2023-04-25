import style from "./alert.module.scss";

interface PropsAlert {
  alertType: string;
}

export default function Alert(props: PropsAlert) {
  const alert = (e: any) => {
    switch (e) {
      case "primary":
        return (
          <div className={`${style.alert} ${style.alert_1_primary}`}>
            <h3 className={style.alert_title}>Hello World</h3>
            <p className={style.alert_content}>Lorem ipsum</p>
          </div>
        );
        break;
      case "secondary":
        return (
          <div className={`${style.alert} ${style.alert_2_secondary}`}>
            <h3 className={style.alert_title}>Hello World</h3>
            <p className={style.alert_content}>Lorem ipsum</p>
          </div>
        );
        break;
      case "danger":
        return (
          <div className={`${style.alert} ${style.alert_3_danger}`}>
            <h3 className={style.alert_title}>Hello World</h3>
            <p className={style.alert_content}>Lorem ipsum</p>
          </div>
        );
        break;
      case "warning":
        return (
          <div className={`${style.alert} ${style.alert_1_warning}`}>
            <h3 className={style.alert_title}>Hello World</h3>
            <p className={style.alert_content}>Lorem ipsum</p>
          </div>
        );
        break;
      case "success":
        return (
          <div className={`${style.alert} ${style.alert_2_success}`}>
            <h3 className={style.alert_title}>Hello World</h3>
            <p className={style.alert_content}>Lorem ipsum</p>
          </div>
        );
        break;
    }
  };

  return (
    <>
      <div className={style.main}>
        <div className={style.section}>
          {alert(props.alertType)}
        </div>
      </div>
    </>
  );
}
