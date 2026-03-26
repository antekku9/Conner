import { useParams, Link } from 'react-router';
import { getProductBySlug, products } from '../data/products';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle, XCircle, ArrowLeft, Phone, Mail, ShoppingCart } from 'lucide-react';
import { ProductCard } from '../components/products/ProductCard';
import { OmnibusPriceInfo } from '../components/products/OmnibusPriceInfo';