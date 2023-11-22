import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
import { Spinner, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail'; // Import ItemDetail component

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products');

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProducts(productsAdapted);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [categoryId]); // Include categoryId in the dependency array

    return (
        <div>
            {loading ? (
                <Flex height='100%' flexDirection='column' justifyContent='center'>
                    <Spinner />
                </Flex>
            ) : (
                <div>
                    {products.map(product => (
                        <ItemDetail key={product.id} {...product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;