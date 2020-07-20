import React,{useState,useEffect} from 'react'
import { List, 
    ListItem, Left, Body, Right, 
    Thumbnail, Text as NativeBaseText,ActionSheet,View,Icon,Title  } from 'native-base';
import {
    FlatList,
    ActivityIndicator, 
    Alert,
  } from 'react-native';
 import {useNavigation,useFocusEffect} from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
import ContentLoader, { Rect, Circle, BulletList,List as ListLoader } from 'react-content-loader/native'
import { clearSearchCategoryState, GetSearchCategories } from '../../../store/actions/CategoryAction';

 
export default function SearchStateList(props) {

 
    const navigation = useNavigation();

    const [initPager, setinitPager] = useState("1");

    const dispatch = useDispatch();

    const [refreshBool, setrefreshBool] = useState(false);
    
    const searchResponse = useSelector(state=>state.category.categoriesSearchState);

    const [responseData, setResponseData] = useState([]);

    const [totalItems, setTotalItems] = useState("");

 
    useEffect(() => 
    {
      console.log(props);
      setResponseData([]);
      console.log(props.props);
      console.log(responseData);
     
     if(props.props !="")
     {
      setinitPager("1"); 
      dispatch(GetSearchCategories(initPager,props.props));

     }
      

      return () => {
        
      };
    }, [props.props]);

    
         /**
  * called once we loose focus of this screen react navigation 5 new hooks
  */ 
   useFocusEffect(
  React.useCallback(() => {
  
    return () => {
      dispatch(clearSearchCategoryState());
    }
  }, [])
 
  );

  useEffect(() => {
        
    console.log(searchResponse);

  if(searchResponse!="" && searchResponse!="loading" && searchResponse !=null)
  {
      if(initPager==1)
      {
        console.log(searchResponse);
        setResponseData(searchResponse);

        if(searchResponse.length >= 20)
        {
          let nextPage = parseInt(initPager) + 1;
          setinitPager(nextPage);
        } 

      }else
      {
        setResponseData(responseData => 
          [...responseData, 
            ...searchResponse]);

            if(searchResponse.length >= 20)
      {
        let nextPage = parseInt(initPager) + 1;
        setinitPager(nextPage);
      } 

      }
 
      setrefreshBool(false);
      setTotalItems(searchResponse.length);

    
  }else
  {
    setrefreshBool(false);
  }
  return () => {
    
  }
}, [searchResponse])


    const loadRelatedBanks = (id,name)=>
    {
      console.log("clicked me");
      navigation.navigate("BankLists",{
        name:name,
        id:id
      });
    }

    const fetchMore = () =>
     {
       if(props.props=="")
       {
         dispatch(clearSearchCategoryState());
         setResponseData([]);
         return;
       }

      if(searchResponse.length < 20 )
      {

      } else
      {
        setrefreshBool(true);
      dispatch(GetSearchCategories(initPager,props.props));
      }
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
 
  

  const renderItem = (item ,index) =>
  {
    
      return(
        <List>
        <ListItem onPress={e=>loadRelatedBanks(item.id,item.name)}>
          <Left>
            <NativeBaseText style={{fontWeight:"bold"}}>{item.name} </NativeBaseText>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      </List>
      );
     
  }

  const renderFooter = () =>
  {
       if(refreshBool==false){
           return null;
       }
        return <ActivityIndicator size="large" />;
      
  }
 

    return (
      <>
     
      { 
        (searchResponse =="loading" && initPager==1 && props.props!='')
        ? 
          loadAnimation()
        :
        <FlatList
        data={responseData}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={fetchMore}
         onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
         refreshing={refreshBool}
      />
      }
      
      </>
    )
}
 
