import React from 'react'
import classes from './Ticket.module.css'

const Ticket = () => {
  return (
    <div className={classes.ticketWrapper}>
      <div className={classes.profileTop}>
        <div className={classes.profileImg}>
          <img src='./images/image2.jpeg' alt='' />
        </div>
        <div className={classes.profileName}>
          <h1>
            Ivaylo Bachvarov <br />
            <span>Co-Founder, HackSoft</span>
          </h1>
        </div>

        <div className={classes.ticketTime}>
          <p>20 minutes ago</p>
        </div>
      </div>

      <div className={classes.ticketContent}>
        <div className={classes.ticketText}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            obcaecati minima ipsa officia ad inventore?
          </p>
        </div>
        <div className={classes.ticketLikes}>
          <svg
            width='10'
            height='10'
            viewBox='0 0 10 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M9.16667 4.99967C9.16667 4.29864 8.69566 3.74967 7.91667 3.74967H6.63624L6.64783 3.71812C6.6594 3.68682 6.692 3.60089 6.72368 3.5174L6.72374 3.51725L6.7238 3.51708C6.75184 3.44319 6.77912 3.37128 6.79045 3.34088C6.86967 3.12824 6.92748 2.95691 6.97426 2.78723C7.04496 2.53077 7.08333 2.29972 7.08333 2.08301C7.08333 1.46967 6.70494 1.08872 6.14511 0.92571C5.89261 0.852186 5.67283 0.832969 5.41666 0.833008H5.21687L5.09178 0.988793C4.95046 1.16477 4.67291 1.48194 4.35292 1.84759L4.35291 1.84759L4.35291 1.8476C3.7626 2.52215 3.02787 3.36172 2.73764 3.78442C2.66233 3.76206 2.58257 3.75005 2.5 3.75005H1.66666C1.20642 3.75005 0.833328 4.12314 0.833328 4.58338V8.33338C0.833328 8.79362 1.20642 9.16672 1.66666 9.16672H2.5C2.7863 9.16672 3.03888 9.02234 3.1889 8.80241C3.31531 8.88417 3.45634 8.9524 3.60963 9.00725C3.9606 9.13282 4.30868 9.17138 4.59766 9.16609L7.5 9.16634C8.64797 9.16634 9.16667 7.47616 9.16667 4.99967ZM3.33333 7.49967L3.33333 7.50114C3.33382 7.87616 3.52213 8.09087 3.89036 8.22262C4.12942 8.30816 4.38557 8.33653 4.56794 8.33326L4.58333 8.33301H7.5C7.92297 8.33301 8.33333 6.99582 8.33333 4.99967C8.33333 4.73296 8.20467 4.58301 7.91666 4.58301H6.25C5.75227 4.58301 5.64814 4.19815 5.75193 3.78147C5.77635 3.68345 5.81205 3.57558 5.86623 3.42907C5.87924 3.39389 5.91441 3.30119 5.9472 3.21477L5.94721 3.21473C5.97411 3.14383 5.99941 3.07716 6.00955 3.04995C6.081 2.85816 6.13172 2.70783 6.17089 2.56576C6.2233 2.37564 6.25 2.21492 6.25 2.08301C6.25 1.8951 6.1509 1.79534 5.91213 1.72581C5.81182 1.6966 5.71308 1.6805 5.60831 1.67264C5.38907 1.93473 5.0751 2.29293 4.75194 2.66162L4.75194 2.66162L4.75193 2.66163C4.12579 3.37599 3.46518 4.12967 3.39237 4.29967C3.35184 4.3943 3.33333 4.48292 3.33333 4.58301V7.49967ZM1.66666 8.33338V4.58338H2.49999V8.33338H1.66666Z'
              fill='white'
            />
          </svg>

          <span>4</span>
        </div>
      </div>
      <div className={classes.ticketShareAndLike}>
        <div className={classes.ticketLike}>
          <svg
            width='59'
            height='24'
            viewBox='0 0 59 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M22 11.9991C22 10.3167 20.8696 8.99914 19 8.99914H15.927L15.9548 8.92342C15.9826 8.84824 16.0609 8.64176 16.137 8.44124L16.1376 8.43964C16.2047 8.26276 16.27 8.09081 16.2971 8.01805C16.4872 7.5077 16.626 7.0965 16.7382 6.68927C16.9079 6.07378 17 5.51926 17 4.99915C17 3.52714 16.0919 2.61286 14.7483 2.22163C14.1423 2.04517 13.6148 1.99905 13 1.99915H12.5205L12.2203 2.37303C11.8811 2.79536 11.2151 3.55647 10.4472 4.43397L10.4471 4.43403L10.447 4.43415C9.03026 6.05306 7.2669 8.06805 6.57035 9.08255C6.38961 9.02887 6.19817 9.00004 6 9.00004H4C2.89543 9.00004 2 9.89547 2 11V20C2 21.1046 2.89543 22 4 22H6C6.68713 22 7.29332 21.6535 7.65337 21.1257C7.95674 21.3219 8.29522 21.4857 8.66312 21.6173C9.50544 21.9187 10.3408 22.0112 11.0344 21.9986L18 21.9991C20.7551 21.9991 22 17.9427 22 11.9991ZM8 17.9991L8 18.0014C8.00076 18.9022 8.45271 19.4179 9.33688 19.7342C9.91062 19.9395 10.5254 20.0076 10.9631 19.9998L11 19.9991H18C19.0151 19.9991 20 16.7899 20 11.9991C20 11.359 19.6912 10.9991 19 10.9991H15C13.8055 10.9991 13.5555 10.0755 13.8047 9.07545C13.8633 8.84021 13.9489 8.58131 14.079 8.22969C14.1102 8.14527 14.1946 7.92285 14.2733 7.71546L14.2739 7.71366L14.274 7.71346C14.3383 7.54398 14.3987 7.38489 14.4229 7.3198C14.5944 6.85951 14.7162 6.49872 14.8101 6.15775C14.9359 5.70146 15 5.31573 15 4.99914C15 4.54817 14.7622 4.30874 14.1891 4.14188C13.9484 4.07177 13.7114 4.03313 13.46 4.01427C12.9338 4.64327 12.1802 5.50297 11.4047 6.38782C9.90193 8.10228 8.31645 9.91114 8.14171 10.3191C8.04443 10.5463 8 10.7589 8 10.9991V17.9991ZM4 20V11H6V20H4Z'
              fill='#65676B'
            />
            <path
              d='M32.38 18C32.28 18 32.23 17.95 32.23 17.85V7.65C32.23 7.55 32.28 7.5 32.38 7.5H33.52C33.62 7.5 33.67 7.55 33.67 7.65V16.695C33.67 16.735 33.69 16.755 33.73 16.755H38.905C39.005 16.755 39.055 16.805 39.055 16.905V17.85C39.055 17.95 39.005 18 38.905 18H32.38ZM41.4747 9.165C41.1947 9.165 40.9647 9.075 40.7847 8.895C40.6047 8.715 40.5147 8.485 40.5147 8.205C40.5147 7.925 40.6047 7.695 40.7847 7.515C40.9647 7.335 41.1947 7.245 41.4747 7.245C41.7547 7.245 41.9847 7.335 42.1647 7.515C42.3447 7.695 42.4347 7.925 42.4347 8.205C42.4347 8.485 42.3447 8.715 42.1647 8.895C41.9847 9.075 41.7547 9.165 41.4747 9.165ZM40.8747 17.985C40.7747 17.985 40.7247 17.935 40.7247 17.835V10.515C40.7247 10.415 40.7747 10.365 40.8747 10.365H42.0147C42.1147 10.365 42.1647 10.415 42.1647 10.515V17.835C42.1647 17.935 42.1147 17.985 42.0147 17.985H40.8747ZM44.5779 18C44.4779 18 44.4279 17.95 44.4279 17.85V7.65C44.4279 7.55 44.4779 7.5 44.5779 7.5H45.7179C45.8179 7.5 45.8679 7.55 45.8679 7.65V13.425C45.8679 13.445 45.8779 13.46 45.8979 13.47C45.9179 13.48 45.9329 13.475 45.9429 13.455L48.7179 10.44C48.7579 10.39 48.8179 10.365 48.8979 10.365H50.2329C50.2929 10.365 50.3279 10.385 50.3379 10.425C50.3579 10.455 50.3479 10.495 50.3079 10.545L48.3729 12.78C48.3529 12.82 48.3479 12.85 48.3579 12.87L50.6529 17.82L50.6679 17.88C50.6679 17.96 50.6229 18 50.5329 18H49.3329C49.2529 18 49.1979 17.96 49.1679 17.88L47.3829 13.8C47.3629 13.75 47.3379 13.745 47.3079 13.785L45.8979 15.345C45.8779 15.385 45.8679 15.41 45.8679 15.42V17.85C45.8679 17.95 45.8179 18 45.7179 18H44.5779ZM57.8443 13.23C57.8843 13.64 57.8993 14.1 57.8893 14.61C57.8893 14.71 57.8393 14.76 57.7393 14.76H52.9543C52.9143 14.76 52.8943 14.78 52.8943 14.82C52.8943 15.16 52.9243 15.42 52.9843 15.6C53.0943 16 53.3143 16.315 53.6443 16.545C53.9843 16.765 54.4093 16.875 54.9193 16.875C55.6593 16.875 56.2293 16.57 56.6293 15.96C56.6793 15.86 56.7443 15.845 56.8243 15.915L57.6793 16.485C57.7493 16.545 57.7643 16.61 57.7243 16.68C57.4443 17.13 57.0443 17.485 56.5243 17.745C56.0143 18.005 55.4343 18.135 54.7843 18.135C54.0543 18.135 53.4393 17.975 52.9393 17.655C52.4393 17.335 52.0643 16.88 51.8143 16.29C51.5743 15.7 51.4543 14.985 51.4543 14.145C51.4543 13.415 51.5093 12.86 51.6193 12.48C51.7993 11.79 52.1593 11.245 52.6993 10.845C53.2393 10.445 53.8943 10.245 54.6643 10.245C55.6743 10.245 56.4293 10.5 56.9293 11.01C57.4293 11.51 57.7343 12.25 57.8443 13.23ZM54.6643 11.49C54.2343 11.49 53.8793 11.6 53.5993 11.82C53.3193 12.03 53.1293 12.315 53.0293 12.675C52.9593 12.895 52.9143 13.175 52.8943 13.515C52.8943 13.555 52.9143 13.575 52.9543 13.575H56.3893C56.4293 13.575 56.4493 13.555 56.4493 13.515C56.4293 13.185 56.3993 12.94 56.3593 12.78C56.2593 12.39 56.0593 12.08 55.7593 11.85C55.4693 11.61 55.1043 11.49 54.6643 11.49Z'
              fill='#65676B'
            />
          </svg>
        </div>
        <div className={classes.ticketShare}>
          <svg
            width='70'
            height='24'
            viewBox='0 0 70 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14.2412 2.57571L22.846 10.0332C23.1911 10.3323 23.1911 10.8677 22.846 11.1668L14.2412 18.6243C13.7555 19.0452 13 18.7002 13 18.0575V14.15C13 13.7358 12.6638 13.399 12.2496 13.4078C6.39732 13.5334 4.98456 15.1506 3.733 17.1185C3.34622 17.7267 2.54072 17.4703 2.62415 16.7543C3.15924 12.1626 5.55254 8.09601 12.2497 7.81543C12.6636 7.79809 13 7.46421 13 7.05V3.14247C13 2.49978 13.7555 2.15479 14.2412 2.57571Z'
              fill='#65676B'
            />
            <path
              d='M37.6943 13.2534C37.6943 13.0337 37.6602 12.8384 37.5918 12.6675C37.5283 12.4966 37.4136 12.3403 37.2476 12.1987C37.0815 12.0571 36.8472 11.9204 36.5444 11.7886C36.2466 11.6519 35.8657 11.5127 35.4019 11.3711C34.894 11.2148 34.4253 11.0415 33.9956 10.8511C33.5708 10.6558 33.1997 10.4312 32.8823 10.1772C32.5649 9.91846 32.3184 9.62305 32.1426 9.29102C31.9668 8.9541 31.8789 8.56592 31.8789 8.12646C31.8789 7.69189 31.9692 7.29639 32.1499 6.93994C32.3354 6.5835 32.5967 6.27588 32.9336 6.01709C33.2754 5.75342 33.6782 5.55078 34.1421 5.40918C34.606 5.2627 35.1187 5.18945 35.6802 5.18945C36.4712 5.18945 37.1523 5.33594 37.7236 5.62891C38.2998 5.92188 38.7417 6.31494 39.0493 6.80811C39.3618 7.30127 39.5181 7.8457 39.5181 8.44141H37.6943C37.6943 8.08984 37.6187 7.77979 37.4673 7.51123C37.3208 7.23779 37.0962 7.02295 36.7935 6.8667C36.4956 6.71045 36.1172 6.63232 35.6582 6.63232C35.2236 6.63232 34.8623 6.69824 34.5742 6.83008C34.2861 6.96191 34.0713 7.14014 33.9297 7.36475C33.7881 7.58936 33.7173 7.84326 33.7173 8.12646C33.7173 8.32666 33.7637 8.50977 33.8564 8.67578C33.9492 8.83691 34.0908 8.98828 34.2812 9.12988C34.4717 9.2666 34.7109 9.396 34.999 9.51807C35.2871 9.64014 35.6265 9.75732 36.0171 9.86963C36.6079 10.0454 37.123 10.2407 37.5625 10.4556C38.002 10.6655 38.3682 10.9048 38.6611 11.1733C38.9541 11.4419 39.1738 11.7471 39.3203 12.0889C39.4668 12.4258 39.54 12.8091 39.54 13.2388C39.54 13.688 39.4497 14.0933 39.269 14.4546C39.0884 14.811 38.8296 15.1162 38.4927 15.3701C38.1606 15.6191 37.7603 15.812 37.2915 15.9487C36.8276 16.0806 36.3101 16.1465 35.7388 16.1465C35.2261 16.1465 34.7207 16.0781 34.2227 15.9414C33.7295 15.8047 33.2803 15.5972 32.875 15.3188C32.4697 15.0356 32.1475 14.6841 31.9082 14.2642C31.6689 13.8394 31.5493 13.3438 31.5493 12.7773H33.3877C33.3877 13.124 33.4463 13.4194 33.5635 13.6636C33.6855 13.9077 33.854 14.1079 34.0688 14.2642C34.2837 14.4155 34.5327 14.5278 34.8159 14.6011C35.104 14.6743 35.4116 14.7109 35.7388 14.7109C36.1685 14.7109 36.5273 14.6499 36.8154 14.5278C37.1084 14.4058 37.3281 14.2349 37.4746 14.0151C37.6211 13.7954 37.6943 13.5415 37.6943 13.2534ZM42.7334 4.75V16H40.9756V4.75H42.7334ZM42.4258 11.7446L41.8545 11.7373C41.8594 11.1904 41.9351 10.6851 42.0815 10.2212C42.2329 9.75732 42.4429 9.35449 42.7114 9.0127C42.9849 8.66602 43.312 8.3999 43.6929 8.21436C44.0737 8.02393 44.4961 7.92871 44.96 7.92871C45.3506 7.92871 45.7021 7.98242 46.0146 8.08984C46.332 8.19727 46.6055 8.37061 46.835 8.60986C47.0645 8.84424 47.2378 9.15186 47.355 9.53271C47.4771 9.90869 47.5381 10.3677 47.5381 10.9097V16H45.7656V10.895C45.7656 10.5142 45.7095 10.2114 45.5972 9.98682C45.4897 9.76221 45.3311 9.60107 45.1211 9.50342C44.9111 9.40088 44.6548 9.34961 44.3521 9.34961C44.0347 9.34961 43.7539 9.41309 43.5098 9.54004C43.2705 9.66699 43.0703 9.84033 42.9092 10.0601C42.748 10.2798 42.626 10.5337 42.543 10.8218C42.4648 11.1099 42.4258 11.4175 42.4258 11.7446ZM53.793 14.4106V10.6313C53.793 10.3481 53.7417 10.104 53.6392 9.89893C53.5366 9.69385 53.3804 9.53516 53.1704 9.42285C52.9653 9.31055 52.7065 9.25439 52.394 9.25439C52.106 9.25439 51.8569 9.30322 51.647 9.40088C51.437 9.49854 51.2734 9.63037 51.1562 9.79639C51.0391 9.9624 50.9805 10.1504 50.9805 10.3604H49.2227C49.2227 10.0479 49.2983 9.74512 49.4497 9.45215C49.6011 9.15918 49.8208 8.89795 50.1089 8.66846C50.397 8.43896 50.7412 8.2583 51.1416 8.12646C51.542 7.99463 51.9912 7.92871 52.4893 7.92871C53.085 7.92871 53.6123 8.02881 54.0713 8.229C54.5352 8.4292 54.8989 8.73193 55.1626 9.13721C55.4312 9.5376 55.5654 10.0405 55.5654 10.646V14.1689C55.5654 14.5303 55.5898 14.855 55.6387 15.1431C55.6924 15.4263 55.7681 15.6729 55.8657 15.8828V16H54.0566C53.9736 15.8096 53.9077 15.5679 53.8589 15.2749C53.8149 14.9771 53.793 14.689 53.793 14.4106ZM54.0493 11.1807L54.064 12.272H52.7969C52.4697 12.272 52.1816 12.3037 51.9326 12.3672C51.6836 12.4258 51.4761 12.5137 51.3101 12.6309C51.144 12.748 51.0195 12.8896 50.9365 13.0557C50.8535 13.2217 50.812 13.4097 50.812 13.6196C50.812 13.8296 50.8608 14.0225 50.9585 14.1982C51.0562 14.3691 51.1978 14.5034 51.3833 14.6011C51.5737 14.6987 51.8032 14.7476 52.0718 14.7476C52.4331 14.7476 52.748 14.6743 53.0166 14.5278C53.29 14.3765 53.5049 14.1934 53.6611 13.9785C53.8174 13.7588 53.9004 13.5513 53.9102 13.356L54.4814 14.1396C54.4229 14.3398 54.3228 14.5547 54.1812 14.7842C54.0396 15.0137 53.854 15.2334 53.6245 15.4434C53.3999 15.6484 53.1289 15.8169 52.8115 15.9487C52.499 16.0806 52.1377 16.1465 51.7275 16.1465C51.21 16.1465 50.7485 16.0439 50.3433 15.8389C49.938 15.6289 49.6206 15.3481 49.3911 14.9966C49.1616 14.6401 49.0469 14.2373 49.0469 13.7881C49.0469 13.3682 49.125 12.9971 49.2812 12.6748C49.4424 12.3477 49.6768 12.0742 49.9844 11.8545C50.2969 11.6348 50.6777 11.4688 51.127 11.3564C51.5762 11.2393 52.0889 11.1807 52.665 11.1807H54.0493ZM59.1836 9.58398V16H57.4185V8.0752H59.103L59.1836 9.58398ZM61.6079 8.02393L61.5933 9.66455C61.4858 9.64502 61.3687 9.63037 61.2417 9.62061C61.1196 9.61084 60.9976 9.60596 60.8755 9.60596C60.5728 9.60596 60.3066 9.6499 60.0771 9.73779C59.8477 9.8208 59.6548 9.94287 59.4985 10.104C59.3472 10.2603 59.23 10.4507 59.147 10.6753C59.064 10.8999 59.0151 11.1514 59.0005 11.4297L58.5977 11.459C58.5977 10.9609 58.6465 10.4995 58.7441 10.0747C58.8418 9.6499 58.9883 9.27637 59.1836 8.9541C59.3838 8.63184 59.6328 8.38037 59.9307 8.19971C60.2334 8.01904 60.5825 7.92871 60.978 7.92871C61.0854 7.92871 61.2002 7.93848 61.3223 7.95801C61.4492 7.97754 61.5444 7.99951 61.6079 8.02393ZM66.061 16.1465C65.4751 16.1465 64.9453 16.0513 64.4717 15.8608C64.0029 15.6655 63.6025 15.3945 63.2705 15.0479C62.9434 14.7012 62.6919 14.2935 62.5161 13.8247C62.3403 13.356 62.2524 12.8506 62.2524 12.3086V12.0156C62.2524 11.3955 62.3428 10.834 62.5234 10.3311C62.7041 9.82812 62.9556 9.39844 63.2778 9.04199C63.6001 8.68066 63.981 8.40479 64.4204 8.21436C64.8599 8.02393 65.3359 7.92871 65.8486 7.92871C66.415 7.92871 66.9106 8.02393 67.3354 8.21436C67.7603 8.40479 68.1118 8.67334 68.3901 9.02002C68.6733 9.36182 68.8833 9.76953 69.02 10.2432C69.1616 10.7168 69.2324 11.2393 69.2324 11.8105V12.5649H63.1094V11.2979H67.4893V11.1587C67.4795 10.8413 67.416 10.5435 67.2988 10.2651C67.1865 9.98682 67.0132 9.76221 66.7788 9.59131C66.5444 9.42041 66.2319 9.33496 65.8413 9.33496C65.5483 9.33496 65.2871 9.39844 65.0576 9.52539C64.833 9.64746 64.645 9.82568 64.4937 10.0601C64.3423 10.2944 64.2251 10.5776 64.1421 10.9097C64.064 11.2368 64.0249 11.6055 64.0249 12.0156V12.3086C64.0249 12.6553 64.0713 12.9775 64.1641 13.2754C64.2617 13.5684 64.4033 13.8247 64.5889 14.0444C64.7744 14.2642 64.999 14.4375 65.2627 14.5645C65.5264 14.6865 65.8267 14.7476 66.1636 14.7476C66.5884 14.7476 66.9668 14.6621 67.2988 14.4912C67.6309 14.3203 67.9189 14.0786 68.1631 13.7661L69.0933 14.667C68.9224 14.916 68.7002 15.1553 68.4268 15.3848C68.1533 15.6094 67.8188 15.7925 67.4233 15.9341C67.0327 16.0757 66.5786 16.1465 66.061 16.1465Z'
              fill='#65676B'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Ticket
