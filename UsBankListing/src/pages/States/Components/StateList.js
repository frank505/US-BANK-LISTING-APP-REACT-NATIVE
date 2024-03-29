import React,{useEffect,useState} from 'react'
import {
    FlatList,
    ActivityIndicator,
    Alert
  } from 'react-native';
  import { Container, Header, Content, List, ListItem, Text,
     Left, Right, Icon,View } from 'native-base';
  import { useSelector,useDispatch } from 'react-redux';
import { GetCategories } from '../../../store/actions/CategoryAction';
import ContentLoader, { Rect, Circle, BulletList,List as ListLoader } from 'react-content-loader/native'
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import { clearCategoryState } from '../../../store/actions/CategoryAction';


export default function StateList() {

    const categoriesResponse = useSelector(state=>state.category.categorieState);

    const dispatch = useDispatch();

    const [refreshBool, setrefreshBool] = useState(false);

    const [initPager, setinitPager] = useState("1");

    const [totalItems, setTotalItems] = useState("");

    const [responseData, setResponseData] = useState("");

    const navigation = useNavigation();
  
    useEffect(() => {
      
       dispatch(GetCategories(initPager));

        return () => {
         
        }
    }, []);


       /**
  * called once we loose focus of this screen react navigation 5 new hooks
  */ 
 useFocusEffect(
  React.useCallback(() => {
  
    return () => {
      dispatch(clearCategoryState());
    }
  }, [])
 
  );
   

   const loadRelatedBanks = (id,name)=>
    {
      console.log("clicked me");
      navigation.navigate("BankLists",{
        name:name,
        id:id
      });
    }

   renderItem = (item,index) =>
   {

        return(
            <List >
            <ListItem onPress={e=>loadRelatedBanks(item.id,item.name)}>
              <Left>
                <Text style={{fontWeight:"bold"}}>{item.name} </Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        );
           
   }
    

    const loadAnimation = () =>
   {
     return (
      <View style={{width:'90%',marginLeft:"5%",marginRight:'5%'}}>
      <ContentLoader 
      speed={1}
      >
<Rect x="0" y=" 30"  width="100%" height="100" />
<Rect x="0" y="60"  width="100%" height="100" />
<Rect x="0" y="90"  width="100%" height="100" />
<Rect x="0" y="120"  width="100%" height="100" />
<Rect x="0" y="150"  width="100%" height="100" />
<Rect x="0" y="180"  width="100%" height="100" />
<Rect x="0" y="210"  width="100%" height="100" />
<Rect x="0" y="240"  width="100%" height="100" />
<Rect x="0" y="270"  width="100%" height="100" />
<Rect x="0" y="300"  width="100%" height="100" />
<Rect x="0" y="330"  width="100%" height="100" />
<Rect x="0" y="360"  width="100%" height="100" />
<Rect x="0" y="390"  width="100%" height="100" />
<Rect x="0" y="420"  width="100%" height="100" />
<Rect x="0" y="450"  width="100%" height="100" />
<Rect x="0" y="480"  width="100%" height="100" />
<Rect x="0" y="510"  width="100%" height="100" />
      </ContentLoader>
   </View>
     );
   }


   const renderFooter = () =>
   {
        if(refreshBool==false){
            return null;
        }
         return <ActivityIndicator size="large" />;
   }
    
   useEffect(() => {
          
      console.log(categoriesResponse);

    if(categoriesResponse!="" && categoriesResponse!=="loading")
    {
      if(categoriesResponse !=null)
      {
        if(categoriesResponse.length >= 20)
        {
          let nextPage = parseInt(initPager) + 1;
          setinitPager(nextPage);
        }
      
        setResponseData(responseData => [...responseData, ...categoriesResponse]);
        setrefreshBool(false);
        setTotalItems(categoriesResponse.length);
      }  
      
    }else
    {
      setrefreshBool(false);
    }
    return () => {
      
    }
  }, [categoriesResponse])
    
   const fetchMore = () =>
     {
             if(initPager==1 && categoriesResponse.length < 20  )
             {

             } else
             {
               setrefreshBool(true);
              dispatch(GetCategories(initPager));
             }
     }


     return (
        <>
        {
         ( (responseData=="" || responseData=="loading" && responseData.length==0) && initPager==1)?
          loadAnimation()
        :
        responseData==null ?
        loadAnimation()
        :
       
        <FlatList
        data={responseData}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={fetchMore}
         onEndReachedThreshold={0.1}
        // onRefresh={handleRefresh}
        ListFooterComponent={renderFooter}
         refreshing={refreshBool}
      />
        
      }
        </>
    )
}
