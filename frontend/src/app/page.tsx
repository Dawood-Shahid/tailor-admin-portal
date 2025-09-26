import { firaCode, geistMono, geistSans, inter, lusitana } from '@/fonts';

export default function Home() {
  return (
    <div
    // className='min-h-screen  p-6'
    >
      <div
      // className='max-w-6xl mx-auto space-y-12'
      >
        <h1 className={`text-xl mb-4`}>Dashboard</h1>
        <h1 className={`text-xl mb-4 ${firaCode.className}`}>
          [firaCode] A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d
          e f g h i j k l m n o p q r s t u v w x y z
        </h1>
        <h1 className={`text-xl mb-4 ${inter.className}`}>
          [inter] A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e
          f g h i j k l m n o p q r s t u v w x y z
        </h1>
        <h1 className={`text-xl mb-4 ${lusitana.className}`}>
          [lusitana] A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d
          e f g h i j k l m n o p q r s t u v w x y z
        </h1>
        <h1 className={`text-xl mb-4 ${geistSans.className}`}>
          [geistSans] A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c
          d e f g h i j k l m n o p q r s t u v w x y z
        </h1>
        <h1 className={`text-xl mb-4 ${geistMono.className}`}>
          [geistMono] A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c
          d e f g h i j k l m n o p q r s t u v w x y z
        </h1>
      </div>
    </div>
  );
}
